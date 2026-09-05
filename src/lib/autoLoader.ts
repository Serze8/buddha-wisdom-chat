type Loader<T> = () => Promise<T>

type Namespace = 'component' | 'route' | 'data'

interface AutoLoaderConfig {
  components?: Record<string, Loader<unknown>>
  routes?: Record<string, Loader<unknown>>
  data?: Record<string, Loader<unknown>>
}

class AutoLoader {
  private cache = new Map<string, Promise<unknown>>()

  private key(namespace: Namespace, name: string) {
    return `${namespace}:${name}`
  }

  private load(namespace: Namespace, name: string, loader: Loader<unknown>): Promise<unknown> {
    const k = this.key(namespace, name)
    if (this.cache.has(k)) {
      return this.cache.get(k) as Promise<unknown>
    }
    const promise = loader().catch((err) => {
      this.cache.delete(k)
      return Promise.reject(err)
    })
    this.cache.set(k, promise)
    return promise
  }

  loadComponent(name: string, loader: Loader<unknown>): Promise<unknown> {
    return this.load('component', name, loader)
  }

  loadData(name: string, loader: Loader<unknown>): Promise<unknown> {
    return this.load('data', name, loader)
  }

  async loadAll(config: AutoLoaderConfig): Promise<void> {
    const jobs: Promise<unknown>[] = []

    if (config.components) {
      for (const [name, loader] of Object.entries(config.components)) {
        jobs.push(this.load('component', name, loader))
      }
    }
    if (config.data) {
      for (const [name, loader] of Object.entries(config.data)) {
        jobs.push(this.load('data', name, loader))
      }
    }

    await Promise.all(jobs)
  }

  has(namespace: Namespace, name: string): boolean {
    return this.cache.has(this.key(namespace, name))
  }

  clear(): void {
    this.cache.clear()
  }
}

export const autoLoader = new AutoLoader()
