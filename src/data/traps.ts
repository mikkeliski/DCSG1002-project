/** En falsk lenke: adressen den egentlig går til, og forklaringen eleven får. */
export interface Trap {
  url: string;
  why: string;
}

export const traps = {
  virusBanner: {
    url: 'http://pc-sjekk-gratis.example/scan?id=8841',
    why: 'Dette er en annonse som ser ut som en systemvarsling. Sider kan ikke vite om PC-en din har virus. Det er en klassisk skremmetaktikk for å få deg til å installere noe.',
  },
  prize: {
    url: 'http://gratis-iphone-vinner.example/claim',
    why: 'Gevinstannonser er nesten alltid svindel. Du har ikke vunnet noe, og målet er å få deg til å oppgi personopplysninger eller kortinfo.',
  },
  javaUpdate: {
    url: 'http://java-oppdatering-na.example/JavaSetup.exe',
    why: 'Slike «oppdater nå»-knapper på tilfeldige nettsider leverer ofte skadevare. Oppdater alltid programmer fra produsentens egen side eller via programmet selv.',
  },
  virusPopup: {
    url: 'http://virus-fjerner-pro.example/RemoveNow.exe',
    why: 'Falsk virusvarsel i nettleseren. Nettsider kan ikke skanne maskinen din. Ekte antivirus varsler deg fra programmet, ikke fra en nettside.',
  },
  greenButton: {
    url: 'http://fast-dl-boost.example/get/DownloadManager_Setup.exe',
    why: 'Stor, grønn «Start Download» med ekstra pil. Adressen går til en helt annen side og filen heter .exe, ikke .jar. En mod skal aldri være en installasjonsfil.',
  },
  orangeButton: {
    url: 'http://best-downloads-2026.example/redirect?f=superdiamant',
    why: 'Her står det «Download Now», men det er en annonse. Se etter den lille «Annonse»-merkingen. Adressen peker til en tredjepart.',
  },
  premium: {
    url: 'http://fildeling-premium-rask.example/checkout',
    why: '«Last ned med Premium» prøver å selge deg et abonnement og en «nedlastingsbehandler». Du trenger ingen av delene for en liten fil.',
  },
  codec: {
    url: 'http://video-codec-pack.example/install-extension',
    why: 'Falsk avspillingsknapp / «videospiller». Kommer ofte med påstanden om at du må installere en kodek eller utvidelse. Det trenger du ikke.',
  },
  vpnBanner: {
    url: 'http://free-vpn-ultra.example/download.apk',
    why: 'En bannerannonse som imiterer en nedlastingsknapp. Alt som blinker og lover «100 % gratis» er mistenkelig.',
  },
  modPack: {
    url: 'http://mega-mods-pack.example/all-mods.zip',
    why: 'Falsk «Download»-knapp i en sidebar-annonse. Teksten i knappen sier ikke noe om hva adressen faktisk er.',
  },
  snapchat: {
    url: 'https://www.snapchat.com/add/hot-singles-lokal',
    why: 'Dette er en klassisk romansesvindel: en «person» med pent bilde vil flytte samtalen til en annen app. Målet er å bygge tillit og senere be om penger, bilder eller kortinfo. Bildet er ofte stjålet. Ikke legg til ukjente som kontakter deg ut av det blå.',
  },
} satisfies Record<string, Trap>;

/**
 * Attributtene som gjør et element til en felle.
 * TrapModal reagerer på klikket, StatusBar viser data-url ved hover.
 */
export const trapAttrs = (trap: Trap) => ({
  'data-fake': true,
  'data-why': trap.why,
  'data-url': trap.url,
});
