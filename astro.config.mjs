// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  i18n: {
    locales: ['no', 'en'],
    defaultLocale: 'no',
    // Norsk ligger på /, /mods … og engelsk på /en, /en/mods …
    routing: { prefixDefaultLocale: false },
  },
});
