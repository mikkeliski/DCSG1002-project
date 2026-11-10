import { getRelativeLocaleUrl } from 'astro:i18n';
import { no } from './no';
import { en } from './en';

// Språkene må være de samme som i astro.config.mjs.
export const locales = ['no', 'en'] as const;
export type Lang = (typeof locales)[number];
export const defaultLang: Lang = 'no';

const dictionaries: Record<Lang, typeof no> = { no, en };

/** Navnet på hvert språk, skrevet på det språket (til språkvelgeren). */
export const languageNames = Object.fromEntries(
  locales.map((l) => [l, dictionaries[l].meta.languageName]),
) as Record<Lang, string>;

/** Tekst som finnes på alle språk, f.eks. i YAML-dataene og traps.ts. */
export type Localized<T = string> = Record<Lang, T>;

/** Språket til siden som vises. Bruk med `Astro.currentLocale`. */
export function getLang(locale: string | undefined): Lang {
  return locales.includes(locale as Lang) ? (locale as Lang) : defaultLang;
}

/** Alle tekstene for et språk: `const t = useTranslations(Astro.currentLocale)`. */
export function useTranslations(locale: string | undefined) {
  return dictionaries[getLang(locale)];
}

/** Lenke på riktig språk: `localePath('en', '/mods')` → `/en/mods`. */
export function localePath(locale: string | undefined, path: string) {
  const url = getRelativeLocaleUrl(getLang(locale), path.replace(/^\//, ''));
  return url.length > 1 ? url.replace(/\/$/, '') : url;
}

/** Samme side på et annet språk, til språkvelgeren. */
export function switchLangPath(pathname: string, target: Lang) {
  const prefix = new RegExp(`^/(${locales.filter((l) => l !== defaultLang).join('|')})(?=/|$)`);
  return localePath(target, pathname.replace(prefix, ''));
}

/** Fyller inn plassholdere: `fill('Spørsmål {n} av {total}', { n: 1, total: 6 })`. */
export function fill(text: string, vars: Record<string, string | number>) {
  return text.replace(/\{(\w+)\}/g, (match, key) => (key in vars ? String(vars[key]) : match));
}

/**
 * `params` for sider i `src/pages/[...lang]/`: norsk uten prefiks (`lang: undefined`),
 * de andre språkene under `/en/` osv.
 */
export const langParams = locales.map((lang) => ({
  lang: lang === defaultLang ? undefined : lang,
}));
