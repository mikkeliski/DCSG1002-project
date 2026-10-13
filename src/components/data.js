// Eksempeldata for ModHavn (alt er fiktivt)
const TYPES = {
  mods: { label: 'Mods', ext: 'jar' },
  modpacks: { label: 'Modpakker', ext: 'zip' },
  resourcepacks: { label: 'Teksturpakker', ext: 'zip' },
  shaders: { label: 'Shaders', ext: 'zip' }
};

const MODS = [
  { id: 'super-diamant-plus', type: 'mods', name: 'Super Diamant+', icon: '💎', color: '#2f6b3a', loader: 'Fabric', ver: '1.21', v: '2.4.1', size: '2,1 MB', dls: 1204311, stars: 48120, author: 'DiamantDaniel', date: '3. oktober 2026',
    desc: 'Nye diamantverktøy, rustning og en helt ny dimensjon.',
    long: 'Super Diamant+ legger til over 40 nye gjenstander, inkludert diamantspade, diamantbue og en rustning som gir deg ekstra hjerter. Utforsk den nye Diamantdimensjonen og bekjemp sjefen på toppen av tårnet.',
    feat: ['40+ nye gjenstander og blokker', 'Ny dimensjon med egne biomer', 'Fungerer sammen med de fleste andre mods'], shot: '⛏️ 💎 🏰' },
  { id: 'nether-utvidet', type: 'mods', name: 'Nether Utvidet', icon: '🔥', color: '#6b3a2f', loader: 'Forge', ver: '1.20', v: '1.8.0', size: '3,4 MB', dls: 840200, stars: 21300, author: 'LavaLise', date: '28. september 2026',
    desc: 'Nye biomer og mobs i Nether.',
    long: 'Nether blir endelig verdt å utforske. Åtte nye biomer, femten nye mobs og en ny festning med skatter.',
    feat: ['8 nye Nether-biomer', '15 nye mobs', 'Nye festninger og skatter'], shot: '🔥 👹 🏯' },
  { id: 'dypt-hav', type: 'mods', name: 'Dypt Hav', icon: '🌊', color: '#2f4a6b', loader: 'Fabric', ver: '1.21', v: '3.0.2', size: '4,8 MB', dls: 510400, stars: 12900, author: 'HavHarald', date: '12. oktober 2026',
    desc: 'Utforsk skipsvrak og undervannsgrotter.',
    long: 'Dykk dypere enn noen gang. Nye skipsvrak, korallgrotter og skapninger i havdypet.',
    feat: ['Store skipsvrak', 'Undervannsgrotter', 'Nytt dykkerutstyr'], shot: '🌊 🐙 ⚓' },
  { id: 'trolldom', type: 'mods', name: 'Trolldom', icon: '🧙', color: '#5a2f6b', loader: 'Forge', ver: '1.19', v: '5.2.0', size: '6,0 MB', dls: 2301000, stars: 60400, author: 'TrollTrine', date: '1. august 2026',
    desc: 'Magi, staver og tryllestaver.',
    long: 'Lær staver, brygg eliksirer og bygg ditt eget tårn. Over 100 staver å oppdage.',
    feat: ['100+ staver', 'Egen magiprogresjon', 'Tryllestaver og ringer'], shot: '🧙 ✨ 📖' },
  { id: 'jordbruk-pluss', type: 'mods', name: 'Jordbruk Pluss', icon: '🌾', color: '#6b5a2f', loader: 'Fabric', ver: '1.21', v: '1.3.4', size: '1,6 MB', dls: 320800, stars: 8100, author: 'BondeBjørn', date: '20. september 2026',
    desc: 'Nye avlinger, dyr og gårdsmaskiner.',
    long: 'Bygg gården din med nye avlinger, husdyr og enkle maskiner som automatiserer arbeidet.',
    feat: ['30 nye avlinger', 'Nye husdyr', 'Gårdsmaskiner'], shot: '🌾 🐄 🚜' },

  { id: 'overlevelse-ekstrem', type: 'modpacks', name: 'Overlevelse Ekstrem', icon: '🏕️', color: '#3a6b5a', loader: 'Fabric', ver: '1.21', v: '4.1', size: '58 MB', dls: 980000, stars: 30100, author: 'PakkePer', date: '5. oktober 2026',
    desc: 'Modpakke med 80 mods for tøff overlevelse.',
    long: 'En ferdig satt sammen pakke med 80 mods som gjør overlevelse tøffere og mer spennende.',
    feat: ['80 mods', 'Tilpasset spillbalanse', 'Ferdig konfigurert'], shot: '🏕️ 🐺 ❄️' },
  { id: 'teknikk-pakken', type: 'modpacks', name: 'Teknikk-pakken', icon: '⚙️', color: '#4a4a5a', loader: 'Forge', ver: '1.20', v: '2.7', size: '92 MB', dls: 450000, stars: 14000, author: 'TannhjulTor', date: '14. september 2026',
    desc: 'Fabrikker, rør og automatisering.',
    long: 'Bygg enorme fabrikker med maskiner, rør og strøm. Pakken inkluderer en egen oppdragsbok.',
    feat: ['Fabrikker og maskiner', 'Oppdragsbok', 'Ferdig konfigurert'], shot: '⚙️ 🏭 🔌' },
  { id: 'eventyr-ruten', type: 'modpacks', name: 'Eventyr-ruten', icon: '🗺️', color: '#6b4a2f', loader: 'Fabric', ver: '1.21', v: '1.5', size: '44 MB', dls: 210000, stars: 6700, author: 'ReiseRagnhild', date: '2. oktober 2026',
    desc: 'Dungeons, byer og sjefer å utforske.',
    long: 'Reis gjennom nye landsbyer, dungeons og sjefer i en handlingsstyrt modpakke.',
    feat: ['40 dungeons', 'Nye landsbyer', 'Sjefskamper'], shot: '🗺️ ⚔️ 🐉' },

  { id: 'myk-piksel', type: 'resourcepacks', name: 'Myk Piksel', icon: '🎨', color: '#6b2f4a', loader: '–', ver: '1.21', v: '1.2', size: '12 MB', dls: 1600000, stars: 44000, author: 'PikselPia', date: '30. september 2026',
    desc: 'Pene, myke teksturer i 32x.',
    long: 'En teksturpakke i 32x som gjør verdenen varmere og mykere uten å endre spillfølelsen.',
    feat: ['32x oppløsning', 'Nye GUI-tekstur', 'Fungerer med alle mods'], shot: '🎨 🌳 🧱' },
  { id: 'retro-klassisk', type: 'resourcepacks', name: 'Retro Klassisk', icon: '🕹️', color: '#4a6b2f', loader: '–', ver: '1.20', v: '3.0', size: '3 MB', dls: 720000, stars: 19000, author: 'GamleGunnar', date: '11. september 2026',
    desc: 'Den gode gamle følelsen fra 2010.',
    long: 'Tilbake til de første dagene. Teksturer, lyder og menyer som i gamle versjoner.',
    feat: ['16x retro-stil', 'Gamle lyder', 'Klassisk GUI'], shot: '🕹️ 🧱 🌲' },

  { id: 'solstrale', type: 'shaders', name: 'Solstråle', icon: '🌅', color: '#6b5a2f', loader: 'Iris', ver: '1.21', v: '2.0', size: '1,2 MB', dls: 1900000, stars: 52000, author: 'LysLeif', date: '8. oktober 2026',
    desc: 'Realistisk lys, skygger og vann.',
    long: 'Skyggelegging med realistiske solstråler, skygger og bølgende vann. Krever Iris eller OptiFine.',
    feat: ['Realistisk lys', 'Dynamiske skygger', 'Bølgende vann'], shot: '🌅 🌊 🌲' },
  { id: 'nattesyn', type: 'shaders', name: 'Nattesyn', icon: '🌙', color: '#2f3a6b', loader: 'Iris', ver: '1.20', v: '1.4', size: '0,9 MB', dls: 650000, stars: 17800, author: 'MånenMia', date: '19. september 2026',
    desc: 'Stemningsfull natt med måneskinn.',
    long: 'Gjør natten vakker med måneskinn, stjerner og tåke. Perfekt for bygging.',
    feat: ['Måneskinn', 'Stjernehimmel', 'Tåkeeffekter'], shot: '🌙 ⭐ 🌌' }
];

function fmt(n) { return n >= 1e6 ? (n / 1e6).toFixed(1).replace('.', ',') + 'M' : n >= 1e3 ? Math.round(n / 1e3) + 'K' : '' + n; }
function fileName(m) { return m.id + '-' + m.v + '.' + TYPES[m.type].ext; }
