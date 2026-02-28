export type ConsentSettings = {
  analytics: boolean;
  marketing: boolean;
};

const STORAGE_KEY = "user_consent";

export function getConsent(): ConsentSettings | null {
  if (typeof window === "undefined") return null;
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : null;
}

export function setConsent(settings: ConsentSettings) {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
}