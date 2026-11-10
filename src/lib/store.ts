// Lagring av poeng mellom sidene. sessionStorage: nullstilles når fanen lukkes.
export const store = {
  get<T>(key: string, fallback: T): T {
    try {
      const value = JSON.parse(sessionStorage.getItem(key) ?? 'null');
      return value ?? fallback;
    } catch {
      return fallback;
    }
  },
  set(key: string, value: unknown): void {
    try {
      sessionStorage.setItem(key, JSON.stringify(value));
    } catch {
      // Privat modus o.l.: siden virker fortsatt, bare uten lagring
    }
  },
};
