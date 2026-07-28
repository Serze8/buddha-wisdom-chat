# Chimes

An interactive cultural curtain. Each country gets its own beaded doorway curtain — woven from its architecture, wisdom, language, and sound. Drag across the hanging strings to play them.

**Live:** https://niyamvora.github.io/chimes/

## A note on this project 🙏

This is a rebuild, done purely for fun and learning. It's **in no way meant to undermine the original work, creativity, or effort** that went into the original — all credit for the concept, design, and craft belongs to the original creator (see [Credits](#credits)). The only goal here is to make something playful and accessible: to poke at the code, learn how the strings physics and synthesized sound work, and let anyone who's curious clone it and try new things. If you like it, please go support the original.

## Run it locally

No build step, no backend — it's plain HTML, CSS, and ES modules.

```bash
git clone https://github.com/niyamvora/chimes.git
cd chimes
python3 -m http.server 8000
# open http://localhost:8000
```

Any static server works (`npx serve`, `php -S localhost:8000`, VS Code Live Server, etc.). It has to be served over HTTP — opening `index.html` as a `file://` won't load the ES modules.

## Want to make it your own?

Clone it and go. A few things worth knowing:

- **Countries** live in [`countries.js`](countries.js) — each entry has a roof image, selector icon, native/roman eyebrow text, title, and a `cloth` string of sayings that become the hanging characters. Add a country by adding an entry (plus a `roof-<id>.png` and `selector-<id>.png`) and listing its `id` in `COUNTRY_ORDER`.
- **Sound** is fully synthesized in [`chimes.js`](chimes.js) via the Web Audio API — per-country timbres, no sample files. Sound is gesture-gated by the browser: it only starts once you interact (drag across the strings).
- **Contributions** persist in `localStorage` — no server involved.
- The **Play** button opens a live settings panel (gravity, damping, chime volume, grid size) powered by [tweakpane](https://tweakpane.github.io/docs/).

## Deploy your own

Push to a GitHub repo and turn on Pages (root of `main`):

```bash
gh repo create my-chimes --public --source=. --push
gh api -X POST /repos/<you>/my-chimes/pages -f "source[branch]=main" -f "source[path]=/"
# live at https://<you>.github.io/my-chimes/ in a minute or two
```

## Credits

- **Original concept, design, and craft** — [Marina Budarina](https://budarina.design/). This rebuild exists because the original is wonderful; all the ideas are hers.
- **Strings physics** — [Liam Egan](https://codepen.io/shubniggurath/pen/ZYpjorm).
- Fonts: [JetBrains Mono](https://www.jetbrains.com/lp/mono/) and PP Eiko.
