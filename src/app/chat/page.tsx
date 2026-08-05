import { redirect } from 'next/navigation'

interface PageProps {
  searchParams: Promise<{ character?: string }>
}

export default async function ChatPage({ searchParams }: PageProps) {
  const { character } = await searchParams
  redirect(character ? `/community-chat?character=${character}` : '/community-chat')
}
