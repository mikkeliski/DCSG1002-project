# ModHavn: a safe practice site for spotting malvertising

**A bilingual (Norwegian/English) web app that teaches young gamers to spot fake download links, scareware and malicious ads by letting them run into those tricks on a harmless copy of a real-looking site.**

Cybersecurity project in DCSG1002 at NTNU Gjøvik (Digital Infrastructure and Cyber Security).
Team: Blokhus, Gudmundsen, Helland, Søbstad.

> No real files are downloaded and nothing is installed. Every mod, ad and "dangerous" link on the site is fictional and points to `.example` domains.

---

## The problem

Young players looking for Minecraft mods often end up on file-sharing sites full of **malvertising**: ads that pose as download buttons, fake virus warnings, "update Java now" pop-ups and romance-scam chat invitations. These are common first steps toward malware infections and account theft, and they work because they look like part of the page.

## What we built

ModHavn looks like an ordinary mod site. When a user picks a mod and clicks "Download", they land on **FilDeling**, a simulated download page packed with the tricks they would meet in the wild. Their job is to find the one real download link.

- **11 realistic traps**, each modelled on a real-world social-engineering technique:
  - scareware ("🛑 VIRUS DETECTED", "your PC needs a scan")
  - fake "Start Download" buttons that lead to `.exe` installers instead of `.jar` mods
  - fake Java and codec updates, and "premium download manager" upsells
  - prize scams, fake VPN banners and bundled "1000 mods" packs
  - a romance-scam pop-up that tries to move the user to another app
- **Hovering shows the real destination** in a simulated status bar, which trains the most important habit: read the URL before you click.
- **Instant feedback on every click.** Each trap explains *why* it was a trap and which warning signs gave it away.
- **A results page** that counts how many fake buttons the user fell for and sums up how to recognise them.
- **A 6-question quiz** and a **"What is malvertising?"** page with practical advice, including ad blockers such as uBlock Origin.
- **Norwegian and English** throughout, with type-checked translations.

## Security concepts covered

| Concept | Where it shows up |
|---|---|
| Malvertising and deceptive UI (dark patterns) | Fake download buttons and ad banners on the FilDeling page |
| Scareware | Fake virus alerts and "scan your PC" ads |
| Malware delivery through fake updates | Fake Java and codec updates, `.exe` instead of `.jar` |
| Social engineering and romance scams | "Friends in your area" and Snapchat pop-ups |
| Link and file-type inspection | Status bar showing the real URL on hover, file-type tips |
| Security awareness training | Click-by-click feedback, results summary and quiz |

## My contribution (Søbstad)

- **Code quality and structure.** Refactored the source code into a readable, industry-standard project layout: reusable Astro components, typed TypeScript, and content separated into data files.
- **Virtualisation and hosting.** Set up how the site is built and served: a Docker multi-stage build with an nginx runtime, a Nix flake for a reproducible development environment, and hosting of the site for the project.

## Tech stack

- **[Astro](https://astro.build/)** with **TypeScript**, built as a static site
- **i18n** with Astro's built-in routing (`/` for Norwegian, `/en/` for English)
- Content in **YAML and TypeScript data files**, so traps, mods and quiz questions can be added without touching the components
- **Docker** multi-stage build (Node build, then an **nginx** runtime on port 8080)
- **Nix flake** for a reproducible development environment
- No back end and no tracking. Progress is kept only in `sessionStorage` and is gone when the tab closes.

## Run it locally

With Node.js installed (or run `nix develop` first):

```bash
npm install
npm run dev        # http://localhost:4321
```

With Docker:

```bash
docker build -t modhavn .
docker run --rm -p 8080:8080 modhavn   # http://localhost:8080
```

Type-check the code and the translations:

```bash
npx astro check
```

## Project structure

```
src
├── components
│   ├── fildeling/        # the simulated download page: ads, fake buttons, pop-ups, trap modal
│   ├── Quiz.astro
│   ├── StatusBar.astro   # shows the real URL when you hover over a link
│   └── ...
├── data
│   ├── traps.ts          # every fake link and the explanation users see
│   ├── quiz.yaml         # quiz questions in Norwegian and English
│   ├── mods.yaml         # the (fictional) mods
│   └── resourceTypes.yaml
├── i18n/                 # no.ts, en.ts and language helpers
├── layouts/
├── lib/store.ts          # sessionStorage helper for the score
└── pages/[...lang]/      # every page, in both languages
```

### Adding a trap

A trap is an entry in `src/data/traps.ts` with a fake URL and an explanation in both languages:

```ts
myTrap: {
  url: 'http://something-suspicious.example/setup.exe',
  why: {
    no: 'Hvorfor dette er en felle ...',
    en: 'Why this is a trap ...',
  },
},
```

Add `{...trapAttrs(traps.myTrap, Astro.currentLocale)}` to an element, and the status bar and trap modal handle the rest.

### Translations

Page text lives in `src/i18n/no.ts` and `src/i18n/en.ts` with the same keys. If a key is missing from `en.ts`, `npx astro check` fails. Text in the data files is stored side by side as `{ no: …, en: … }`. In YAML, `'no'` has to be quoted, or it is read as `false`.
