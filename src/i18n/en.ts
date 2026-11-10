import type { no } from './no';

// Engelske tekster. Typen sørger for at alle nøklene fra no.ts er med.

export const en: typeof no = {
  meta: {
    languageName: 'English',
    numberLocale: 'en-GB',
  },

  header: {
    about: 'About ModHavn',
    learn: 'Learn more',
  },

  footer: 'A school project about downloading files safely · Blokhus, Gudmundsen, Helland, Søbstad',

  home: {
    title: 'ModHavn – A training ground for safe downloading',
    heading: 'Find mods for Minecraft',
    introHtml:
      'ModHavn is a <b>practice site</b> made as part of a cybersecurity project. Pick a mod, download it, and see if you can find the real download link along the way.',
    note: 'No real files are downloaded, and nothing is installed on your computer. All the mods on this site are fictional.',
  },

  about: {
    title: 'About ModHavn',
    lead: 'A project for learning good digital hygiene when downloading game content.',
    whatTitle: 'What is ModHavn',
    whatText:
      'This website is a safe practice site that lets you test how well you recognise online scams in ads. The site is aimed at young gamers, but it suits anyone who wants to get better at spotting online scams. ModHavn was made as a school project for NTNU Gjøvik.',
    howTitle: 'How to use ModHavn',
    testTitle: 'Test your skills',
    testText:
      'ModHavn is made to look like an ordinary download site for game content. The mods, texture packs and mod packs pages simulate what you usually come across when downloading game content. Click one of the options to see its page. There you will find a download link. The link takes you to a download page where you have to try to find the right download link.',
    learnTitle: 'Learn more about malvertising',
    learnHtml: 'On the <a href="{learn}" class="link">learn more</a> page you can read more about malicious ads.',
    quizTitle: 'Try the quiz',
    quizHtml:
      'Once you understand what malicious ads are and how to spot them, you can try the <a href="{quiz}" class="link">quiz</a>.',
  },

  learn: {
    title: 'What is malvertising?',
    banner: 'Learn more',
    whatTitle: 'What is malvertising?',
    whatText:
      'Malvertising (short for “malicious advertising”) is advertising used to spread malware or lure you onto scam sites. The ads are bought through ordinary ad networks, so they can show up on websites you otherwise trust.',
    figureAlt: 'An example of malvertising.',
    figureCaption: 'Example: an ad pretending to be something it isn’t.',
    spotTitle: 'How to recognise it',
    spotList: [
      'It’s urgent: “Your computer is infected!” or “You’ve won!”',
      'Big “Download” buttons that look like the real button on the page.',
      'The link leads to a different domain than the site you’re on.',
      'It asks you to install something to see content or “fix” a problem.',
    ],
    avoidTitle: 'How to avoid malvertising',
    avoidText:
      'The most important way to avoid falling for malvertising is to have good habits when using a computer. Ad blockers stop most ads on the web, which makes them a good defence against malvertising too.',
    habitsTitle: 'Good habits',
    habitsList: [
      'Always think before you click on anything online.',
      'Nothing is ever that urgent: stop and think.',
      'Don’t download anything if you don’t know what it is.',
      'If you notice that something isn’t as usual, ask a friend or a family member.',
    ],
    note: 'If you have clicked an ad by accident, close the tab without downloading anything. Only download programs from the official website or app store, and keep your browser up to date.',
    adblockTitle: 'Ad blockers',
    adblockHtml:
      'It may be worth using an ad blocker. <a href="https://github.com/uBlockOrigin/uBOL-home" target="_blank" class="link">uBlock Origin Lite</a> and <a href="https://github.com/gorhill/ublock" target="_blank" class="link">uBlock Origin</a> are two good examples. Ad blockers remove almost all ads on websites. uBlock can also stop you from visiting known scam sites.',
  },

  quizPage: {
    title: 'Quiz – ModHavn',
    banner: 'Quiz',
  },

  resourceList: {
    empty: 'There are no {label} here yet.',
  },

  mod: {
    tabs: ['Description', 'Files', 'Images', 'Changelog'],
    features: 'Features',
    download: '⬇ Download',
    version: 'Version',
    fileSize: 'File size',
    released: 'Released',
    author: 'Author',
    license: 'License',
  },

  result: {
    title: 'Results and quiz – ModHavn',
    heading: '✅ You found the real link!',
    summaryZero: 'You found it on the first try without clicking a single fake button. Impressive!',
    summaryOne:
      'You clicked 1 fake button before you found the real one. That’s completely normal, because buttons like these are designed to fool people.',
    summaryMany:
      'You clicked {n} fake buttons before you found the real one. That’s completely normal, because buttons like these are designed to fool people.',
    tipsTitle: 'How to recognise a fake download link',
    tipsHtml: [
      '<b>Read the address.</b> Hover over the button. Does it go to a different domain than the site you’re on?',
      '<b>Check the file type.</b> A Minecraft mod is a <code>.jar</code>. An <code>.exe</code>, <code>.msi</code> or <code>.bat</code> is a red flag.',
      '<b>Look for “Ad”.</b> Big, colourful “Download” buttons are often ads.',
      '<b>Don’t trust warnings.</b> Websites can’t know whether your PC has a virus.',
      '<b>Go to the source.</b> Download from the mod’s official page when you can, and avoid in-between pages full of ads.',
      '<b>No “you must install a codec/update/download manager”.</b> You don’t need it.',
    ],
    again: 'Try again',
    quizTitle: 'Quiz: Did you get it?',
  },

  quiz: {
    progress: 'Question {n} of {total}',
    next: 'Next',
    seeResult: 'See result',
    correct: 'Correct!',
    wrong: 'Not quite.',
    scoreHigh: 'Great! You’re well prepared against fake download buttons.',
    scoreMid: 'Good job, but read through the tips above once more.',
    scoreLow: 'Read the tips above and try the practice page again.',
    another: 'Download another mod',
  },

  notFound: {
    text: 'Page not found.',
  },

  fildeling: {
    title: 'FilDeling – Download {file}',
    nav: { login: 'Log in', premium: 'Premium', upload: 'Upload' },
    footer:
      'A school project about safe downloading. FilDeling is a fictional site for training · no real files or malware',
    adLabel: 'Ad',
    topad: {
      headline: 'WARNING: Your PC may be infected with 7 viruses!',
      scanning: 'Scanning system …',
      threats: '7 THREATS FOUND',
      cta: 'SCAN FREE NOW',
    },
    ads: {
      prize: { title: 'CONGRATULATIONS!', text: 'You are visitor no. 1,000,000!', cta: 'CLAIM PRIZE' },
      java: { title: 'Java needs updating', text: 'Your version is outdated and dangerous.', cta: 'UPDATE' },
      friends: { title: 'Friends in your area', text: 'Want to chat now?', cta: 'START' },
      mods: { title: '1000 mods at once!', text: 'Download all mods for free', cta: 'DOWNLOAD' },
    },
    uploadedBy: 'Uploaded by',
    timerBefore: 'Your download will be ready in',
    timerAfter: 'seconds…',
    buttons: {
      start: '⬇ START DOWNLOAD',
      startSub: 'Fast download · Recommended',
      now: 'DOWNLOAD NOW',
      premium: '⚡ Premium download – 10x faster',
      video: '▶ Watch the video first (codec required)',
      real: 'Download ({size})',
    },
    vpnBanner: '⬇ DOWNLOAD – 100% FREE VPN – DOWNLOAD ⬇',
    aboutFile: 'About this file',
    fileInfo: 'File type: .{ext} · Size: {size} · Shared via a link from modhavn.example',
    stuck: 'Stuck?',
    showHint: 'Show hint',
    hintHtml:
      'Hint: Hover over the buttons and read the address in the bottom-left corner. The real file ends in <b>.{ext}</b>, is on FilDeling’s own domain, and the button has no “Ad” label.',
    virus: {
      title: '🛑 VIRUS DETECTED',
      text: 'Trojan.Gen.2 was found on your device. Remove it now!',
      remove: 'REMOVE VIRUS',
      close: 'Close',
    },
    trapModal: {
      title: 'You clicked an ad!',
      address: 'The address was:',
      retry: 'Try again',
    },
    friendPopup: {
      close: 'Close',
      online: '● Online now',
      message: '“Hi! I’m home alone tonight. Add me on Snapchat and let’s talk!”',
      add: 'ADD ON SNAPCHAT',
      footer: 'Ad · Over 2,300 friends online',
    },
  },
};
