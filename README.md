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
│   ├── modpacks.yaml
│   ├── mods.yaml
│   ├── quiz.yaml
│   ├── resourceTypes.yaml
│   ├── singleAd.ts          # bilde/navn i «Single i ditt område»-popupen
│   ├── texturepacks.yaml
│   └── traps.ts             # alle falske lenker og forklaringene til dem
├── images
├── layouts
│   ├── FilDeling.astro
│   └── Global.astro
├── lib
│   └── store.ts
└── pages
    ├── [resourceType]
    │   ├── [id].astro
    │   └── index.astro
    ├── download
    │   └── [resourceType]
    │       └── [id].astro   # /download/mods/<id>
    ├── 404.astro
    ├── about.astro
    ├── index.astro
    ├── learn.astro
    ├── quiz.astro
    └── result.astro
```
