# Cybersikkerhetsprosjekt: nettside om falske nedlastingslenker
Blokhus, Gudmundsen, Helland, Søbstad

## Om siden
Siden er en læringsplattform for trygg bruk av lumske fildelingsplattformer.
Hovedmålgruppen er gamere. Annonsene er harmløse.

## Slik åpner du siden
- Enten bruk ```$ nix develop``` eller ha npm installert
- ```$ npm install```
- ```$ npm run dev```

## Opsett
```
src
├── components
│   ├── Footer.astro
│   └── Header.astro
├── content.config.js
├── data
│   ├── modpacks.yaml
│   ├── mods.yaml
│   └── texturepacks.yaml
├── images
│   └── bilde.jpg
├── layouts
│   └── Global.astro
├── pages
│   ├── download.astro
│   ├── index.astro
│   ├── mod.astro
│   ├── modpacks
│   ├── mods
│   │   └── index.astro
│   ├── result.astro
│   └── texturepacks
└── styles
    └── fildeling.css
```
