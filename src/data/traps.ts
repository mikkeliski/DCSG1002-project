import { getLang, type Localized } from '@i18n/utils';

/** En falsk lenke: adressen den egentlig går til, og forklaringen eleven får (på hvert språk). */
export interface Trap {
  url: string;
  why: Localized;
}

export const traps = {
  virusBanner: {
    url: 'http://pc-sjekk-gratis.example/scan?id=8841',
    why: {
      no: 'Dette er en annonse som ser ut som en systemvarsling. Sider kan ikke vite om PC-en din har virus. Det er en klassisk skremmetaktikk for å få deg til å installere noe.',
      en: 'This is an ad made to look like a system warning. Websites can’t know whether your PC has a virus. It’s a classic scare tactic to get you to install something.',
    },
  },
  prize: {
    url: 'http://gratis-iphone-vinner.example/claim',
    why: {
      no: 'Gevinstannonser er nesten alltid svindel. Du har ikke vunnet noe, og målet er å få deg til å oppgi personopplysninger eller kortinfo.',
      en: 'Prize ads are almost always scams. You haven’t won anything, and the goal is to get you to hand over personal details or card information.',
    },
  },
  javaUpdate: {
    url: 'http://java-oppdatering-na.example/JavaSetup.exe',
    why: {
      no: 'Slike «oppdater nå»-knapper på tilfeldige nettsider leverer ofte skadevare. Oppdater alltid programmer fra produsentens egen side eller via programmet selv.',
      en: '“Update now” buttons like this on random websites often deliver malware. Always update software from the maker’s own website or from inside the program itself.',
    },
  },
  virusPopup: {
    url: 'http://virus-fjerner-pro.example/RemoveNow.exe',
    why: {
      no: 'Falsk virusvarsel i nettleseren. Nettsider kan ikke skanne maskinen din. Ekte antivirus varsler deg fra programmet, ikke fra en nettside.',
      en: 'A fake virus alert in the browser. Websites can’t scan your computer. Real antivirus software warns you from the program, not from a web page.',
    },
  },
  greenButton: {
    url: 'http://fast-dl-boost.example/get/DownloadManager_Setup.exe',
    why: {
      no: 'Stor, grønn «Start Download» med ekstra pil. Adressen går til en helt annen side og filen heter .exe, ikke .jar. En mod skal aldri være en installasjonsfil.',
      en: 'A big green “Start Download” with an extra arrow. The address goes to a completely different site, and the file is an .exe, not a .jar. A mod should never be an installer.',
    },
  },
  orangeButton: {
    url: 'http://best-downloads-2026.example/redirect?f=superdiamant',
    why: {
      no: 'Her står det «Download Now», men det er en annonse. Se etter den lille «Annonse»-merkingen. Adressen peker til en tredjepart.',
      en: 'It says “Download Now”, but it’s an ad. Look for the small “Ad” label. The address points to a third party.',
    },
  },
  premium: {
    url: 'http://fildeling-premium-rask.example/checkout',
    why: {
      no: '«Last ned med Premium» prøver å selge deg et abonnement og en «nedlastingsbehandler». Du trenger ingen av delene for en liten fil.',
      en: '“Download with Premium” tries to sell you a subscription and a “download manager”. You need neither for a small file.',
    },
  },
  codec: {
    url: 'http://video-codec-pack.example/install-extension',
    why: {
      no: 'Falsk avspillingsknapp / «videospiller». Kommer ofte med påstanden om at du må installere en kodek eller utvidelse. Det trenger du ikke.',
      en: 'A fake play button / “video player”. It often comes with a claim that you need to install a codec or extension. You don’t.',
    },
  },
  vpnBanner: {
    url: 'http://free-vpn-ultra.example/download.apk',
    why: {
      no: 'En bannerannonse som imiterer en nedlastingsknapp. Alt som blinker og lover «100 % gratis» er mistenkelig.',
      en: 'A banner ad that imitates a download button. Anything that flashes and promises “100% free” is suspicious.',
    },
  },
  modPack: {
    url: 'http://mega-mods-pack.example/all-mods.zip',
    why: {
      no: 'Falsk «Download»-knapp i en sidebar-annonse. Teksten i knappen sier ikke noe om hva adressen faktisk er.',
      en: 'A fake “Download” button in a sidebar ad. The button text says nothing about where the address actually goes.',
    },
  },
  snapchat: {
    url: 'https://www.snapchat.com/add/hot-singles-lokal',
    why: {
      no: 'Dette er en klassisk romansesvindel: en «person» med pent bilde vil flytte samtalen til en annen app. Målet er å bygge tillit og senere be om penger, bilder eller kortinfo. Bildet er ofte stjålet. Ikke legg til ukjente som kontakter deg ut av det blå.',
      en: 'This is a classic romance scam: a “person” with a nice photo wants to move the conversation to another app. The goal is to build trust and later ask for money, pictures or card details. The photo is often stolen. Don’t add strangers who contact you out of the blue.',
    },
  },
} satisfies Record<string, Trap>;

/**
 * Attributtene som gjør et element til en felle.
 * TrapModal reagerer på klikket, StatusBar viser data-url ved hover.
 */
export const trapAttrs = (trap: Trap, locale: string | undefined) => ({
  'data-fake': true,
  'data-why': trap.why[getLang(locale)],
  'data-url': trap.url,
});
