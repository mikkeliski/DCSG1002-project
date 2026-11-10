# Cybersikkerhetsprosjekt: nettside om falske nedlastingslenker
Blokhus, Gudmundsen, Helland, Søbstad

## Om siden
Siden er en læringsplattform for trygg bruk av lumske fildelingsplattformer.
Hovedmålgruppen er gamere. Annonsene er harmløse.

## Slik åpner du siden
- Enten bruk ```$ nix develop``` eller ha npm installert
- ```$ npm install```
- ```$ npm run dev```

## Oppsett
```
src
├── components
│   ├── fildeling            # komponenter for den falske FilDeling-siden
│   │   ├── AdCard.astro
│   │   ├── DownloadButtons.astro
│   │   ├── Modal.astro
│   │   ├── SnapPopup.astro
│   │   ├── TrapModal.astro
│   │   └── VirusAlert.astro
│   ├── Banner.astro
│   ├── Card.astro
│   ├── CardList.astro
│   ├── Footer.astro
│   ├── Header.astro
│   ├── Quiz.astro
│   └── StatusBar.astro
├── content.config.js
├── data
│   ├── friendAd.ts          # bilde/navn i «Venner i ditt område»-popupen
│   ├── mods.yaml
│   ├── quiz.yaml            # spørsmålene på norsk og engelsk
│   ├── resourceTypes.yaml
│   └── traps.ts             # alle falske lenker og forklaringene til dem
├── i18n
│   ├── en.ts                # engelske tekster
│   ├── no.ts                # norske tekster
│   └── utils.ts             # språk-hjelpere (useTranslations, localePath …)
├── images
├── layouts
│   ├── FilDeling.astro
│   └── Global.astro
├── lib
│   └── store.ts
└── pages
    ├── [...lang]            # alle sidene, på norsk (/) og engelsk (/en/)
    │   ├── [resourceType]
    │   │   ├── [id].astro
    │   │   └── index.astro
    │   ├── download
    │   │   └── [resourceType]
    │   │       └── [id].astro   # /download/mods/<id> og /en/download/mods/<id>
    │   ├── about.astro
    │   ├── index.astro
    │   ├── learn.astro
    │   ├── quiz.astro
    │   └── result.astro
    └── 404.astro            # én felles 404-side for begge språk
```

## Språk (i18n)
Siden finnes på norsk og engelsk. Norsk ligger på `/`, `/mods` osv., og engelsk
på `/en`, `/en/mods` osv. Språkvelgeren i menyen bytter til samme side på det
andre språket.

- **Tekster på sidene** ligger i `src/i18n/no.ts` og `src/i18n/en.ts`, med de
  samme nøklene i begge. Glemmer du en nøkkel i `en.ts`, gir `npx astro check`
  feil. I en komponent henter du tekstene med
  `const t = useTranslations(Astro.currentLocale);`.
- **Tekster i dataene** (quizen, `resourceTypes.yaml`, forklaringene i
  `traps.ts`) står på begge språk ved siden av hverandre: `{ no: …, en: … }`.
  I YAML må `'no'` stå i fnutter, ellers leses det som «false».
- **Lenker** lages med `localePath(Astro.currentLocale, '/mods')`, så de peker
  til riktig språk.
- **Nye sider** legges i `src/pages/[...lang]/` og trenger en `getStaticPaths()`
  som bruker `langParams` (se en av de andre sidene).
- **Annonsebilder med tekst** har en egen engelsk versjon (`win-en.svg`,
  `mods-en.svg`).
