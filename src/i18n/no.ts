// Alle norske tekster på siden. en.ts må ha nøyaktig de samme nøklene
// (astro check gir feil hvis noe mangler).
// Nøkler som slutter på «Html» kan inneholde HTML og vises med set:html.
// {navn} er plassholdere som fylles inn med fill().

export const no = {
  meta: {
    languageName: 'Norsk',
    numberLocale: 'nb-NO',
  },

  header: {
    about: 'Om ModHavn',
    learn: 'Lær mer',
  },

  footer: 'Et skoleprosjekt om sikker nedlasting av filer · Blokhus, Gudmundsen, Helland, Søbstad',

  home: {
    title: 'ModHavn – Treningsområde for trygg nedlasting',
    heading: 'Finn mods til Minecraft',
    introHtml:
      'ModHavn er en <b>øvingsside</b> laget i et cybersikkerhetsprosjekt. Velg en mod, last den ned, og se om du klarer å finne den ekte nedlastingslenken på veien.',
    note: 'Ingen ekte filer lastes ned, og ingenting installeres på maskinen din. Alle mods på siden er fiktive.',
  },

  about: {
    title: 'Om ModHavn',
    lead: 'Et prosjekt for å lære god datahygiene under nedlastning av spillinnhold.',
    whatTitle: 'Hva er ModHavn',
    whatText:
      'Denne nettsiden er en trygg øvingsside som lar deg teste evnene dine til å gjennkjenne nettsvindel fra annonser. Nettsiden er rettet mot unge gamere, men passer for alle som ønsker å bli flinkere på oppdage nettsvindel. ModHavn ble laget som et skoleprosjekt for NTNU Gjøvik.',
    howTitle: 'Hvordan bruke ModHavn',
    testTitle: 'Test evnene dine',
    testText:
      'ModHavn er laget for å se ut som en vanlig nedlastningsside for spillinnhold. Sidene mods, texture packs, og mod packs simulerer hva man vanligvis møter på når man skal laste ned spillinnhold. Trykk på en av valgene for å se siden til innholdet. Der vil du se en nedlastningslenke. Lenken fører deg til en nedlastningsside hvor du skal prøve å finne den riktige nedlastningslenken.',
    learnTitle: 'Lær mer om malvertising',
    learnHtml: 'På siden <a href="{learn}" class="link">lær mer</a> kan du lese mer om ondsinnede annonser.',
    quizTitle: 'Prøv quizen',
    quizHtml:
      'Når du har forstått hva ondsinnede annonser er og hvordan man oppdager de, kan du prøve <a href="{quiz}" class="link">quizen</a>.',
  },

  learn: {
    title: 'Hva er malvertising?',
    banner: 'Lær mer',
    whatTitle: 'Hva er malvertising?',
    whatText:
      'Malvertising (fra engelsk «malicious advertising») er reklame som brukes til å spre skadevare eller lure deg inn på svindelsider. Annonsene kjøpes gjennom vanlige annonsenettverk, så de kan dukke opp på nettsider du ellers stoler på.',
    figureAlt: 'Et eksempel på malvertising.',
    figureCaption: 'Eksempel: en annonse som utgir seg for å være noe den ikke er.',
    spotTitle: 'Slik kjenner du den igjen',
    spotList: [
      'Den haster: «Datamaskinen din er infisert!» eller «Du har vunnet!»',
      'Store «Last ned»-knapper som ligner den ekte knappen på siden.',
      'Lenken fører til et annet domene enn nettstedet du er på.',
      'Den ber deg installere noe for å se innhold eller «fikse» et problem.',
    ],
    avoidTitle: 'Hvordan unngå malvertising',
    avoidText:
      'Det viktigste tiltaket for å unngå å falle for malvertising er å ha gode vaner rundt databruk. Ad-blockere hinderer de fleste annonser på nettet, derfor er ad-blockere også et godt tiltak mot malvertising.',
    habitsTitle: 'Gode vaner',
    habitsList: [
      'Alltid tenk deg om før du trykker på noe på nettet.',
      'Det haster aldri, stopp opp og tenk deg om.',
      'Ikke last ned noe du ikke vet hva er.',
      'Hvis du oppdager at noe ikke er som vanlig, spør en venn eller et familiemedlem.',
    ],
    note: 'Har du klikket på en annonse ved et uhell, lukk fanen uten å laste ned noe. Last bare ned programmer fra den offisielle nettsiden eller appbutikken, og hold nettleseren oppdatert.',
    adblockTitle: 'Ad blockers',
    adblockHtml:
      'Det kan være lurt å vurdere å bruke en ad blocker. <a href="https://github.com/uBlockOrigin/uBOL-home" target="_blank" class="link">uBlock origin lite</a> eller <a href="https://github.com/gorhill/ublock" target="_blank" class="link">uBlock origin</a> er to gode eksempler. Ad blockere fjerner nesten alle annonser på nettsider. uBlock kan også hindre deg fra å besøke kjente svindelsider.',
  },

  quizPage: {
    title: 'Quiz – ModHavn',
    banner: 'Quiz',
  },

  resourceList: {
    empty: 'Det er ingen {label} her ennå.',
  },

  mod: {
    tabs: ['Beskrivelse', 'Filer', 'Bilder', 'Endringslogg'],
    features: 'Funksjoner',
    download: '⬇ Last ned',
    version: 'Versjon',
    fileSize: 'Filstørrelse',
    released: 'Utgitt',
    author: 'Forfatter',
    license: 'Lisens',
  },

  result: {
    title: 'Resultat og quiz – ModHavn',
    heading: '✅ Du fant den ekte lenken!',
    summaryZero: 'Du fant den på første forsøk uten å klikke på en eneste falsk knapp. Imponerende!',
    summaryOne:
      'Du klikket på 1 falsk knapp før du fant den ekte. Det er helt normalt, og nettopp slike knapper er laget for å lure folk.',
    summaryMany:
      'Du klikket på {n} falske knapper før du fant den ekte. Det er helt normalt, og nettopp slike knapper er laget for å lure folk.',
    tipsTitle: 'Slik kjenner du igjen en falsk nedlastingslenke',
    tipsHtml: [
      '<b>Les adressen.</b> Hold musepekeren over knappen. Går den til et annet domene enn siden du er på?',
      '<b>Sjekk filtypen.</b> En Minecraft-mod er en <code>.jar</code>. En <code>.exe</code>, <code>.msi</code> eller <code>.bat</code> er et rødt flagg.',
      '<b>Se etter «Annonse».</b> Store, fargerike «Download»-knapper er ofte reklame.',
      '<b>Ikke stol på varsler.</b> Nettsider kan ikke vite om PC-en din har virus.',
      '<b>Gå til kilden.</b> Last helst ned fra modens offisielle side og unngå mellomsider med mye reklame.',
      '<b>Ingen «må installere kodek/oppdatering/nedlastingsbehandler».</b> Det trenger du ikke.',
    ],
    again: 'Prøv igjen',
    quizTitle: 'Quiz: Har du skjønt det?',
  },

  quiz: {
    progress: 'Spørsmål {n} av {total}',
    next: 'Neste',
    seeResult: 'Se resultat',
    correct: 'Riktig!',
    wrong: 'Ikke helt.',
    scoreHigh: 'Flott! Du er godt rustet mot falske nedlastingsknapper.',
    scoreMid: 'Bra jobbet, men les gjennom tipsene over en gang til.',
    scoreLow: 'Les tipsene over og prøv øvingssiden en gang til.',
    another: 'Last ned en annen mod',
  },

  notFound: {
    text: 'Kunne ikke finne siden.',
  },

  // Den falske fildelingssiden
  fildeling: {
    title: 'FilDeling – Last ned {file}',
    nav: { login: 'Logg inn', premium: 'Premium', upload: 'Last opp' },
    footer:
      'Et skoleprosjekt om sikker nedlasting. FilDeling er en fiktiv side for opplæring · ingen ekte filer eller skadevare',
    adLabel: 'Annonse',
    topad: {
      headline: 'ADVARSEL: PC-en din kan være infisert med 7 virus!',
      scanning: 'Skanner systemet …',
      threats: '7 TRUSLER FUNNET',
      cta: 'SKANN GRATIS NÅ',
    },
    ads: {
      prize: { title: 'GRATULERER!', text: 'Du er besøkende nr. 1 000 000!', cta: 'KREV GEVINST' },
      java: { title: 'Java må oppdateres', text: 'Din versjon er utdatert og farlig.', cta: 'OPPDATER' },
      friends: { title: 'Venner i ditt område', text: 'Vil du chatte nå?', cta: 'START' },
      mods: { title: '1000 mods på en gang!', text: 'Last ned alle mods gratis', cta: 'DOWNLOAD' },
    },
    uploadedBy: 'Lastet opp av',
    timerBefore: 'Nedlastingen din er klar om',
    timerAfter: 'sekunder…',
    buttons: {
      start: '⬇ START NEDLASTING',
      startSub: 'Rask nedlasting · Anbefalt',
      now: 'DOWNLOAD NOW',
      premium: '⚡ Premium-nedlasting – 10x raskere',
      video: '▶ Se video først (kodek kreves)',
      real: 'Last ned ({size})',
    },
    vpnBanner: '⬇ DOWNLOAD – 100% GRATIS VPN – DOWNLOAD ⬇',
    aboutFile: 'Om filen',
    fileInfo: 'Filtype: .{ext} · Størrelse: {size} · Delt via lenke fra modhavn.example',
    stuck: 'Står du fast?',
    showHint: 'Vis hint',
    hintHtml:
      'Hint: Hold musepekeren over knappene og les adressen nederst til venstre. Den ekte filen ender på <b>.{ext}</b>, ligger på FilDelings eget domene, og knappen har ingen «annonse»-merking.',
    virus: {
      title: '🛑 VIRUS OPPDAGET',
      text: 'Trojan.Gen.2 ble funnet på enheten din. Fjern nå!',
      remove: 'FJERN VIRUS',
      close: 'Lukk',
    },
    trapModal: {
      title: 'Du trykket på en annonse!',
      address: 'Adressen var:',
      retry: 'Prøv igjen',
    },
    friendPopup: {
      close: 'Lukk',
      online: '● Pålogget nå',
      message: '«Hei! Jeg er alene hjemme i kveld. Legg meg til på Snapchat så snakkes vi!»',
      add: 'LEGG TIL PÅ SNAPCHAT',
      footer: 'Annonse · Over 2 300 venner online',
    },
  },
};
