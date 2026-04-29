"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import T, { Lang, Translations, LANGS } from "@/i18n/translations";

type CtxValue = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: keyof Translations) => string;
  dir: "ltr" | "rtl";
};

const LanguageContext = createContext<CtxValue>({
  lang: "pt",
  setLang: () => {},
  t: (k) => T.pt[k],
  dir: "ltr",
});

function detectLang(): Lang {
  if (typeof window === "undefined") return "pt";
  const saved = localStorage.getItem("ott-lang") as Lang | null;
  if (saved && T[saved]) return saved;
  const nav = navigator.language.toLowerCase();
  if (nav.startsWith("pt")) return "pt";
  if (nav.startsWith("en")) return "en";
  if (nav.startsWith("es")) return "es";
  if (nav.startsWith("fr")) return "fr";
  if (nav.startsWith("it")) return "it";
  if (nav.startsWith("de")) return "de";
  if (nav.startsWith("ru")) return "ru";
  if (nav.startsWith("ro")) return "ro";
  if (nav.startsWith("ar")) return "ar";
  if (nav.startsWith("zh")) return "zh";
  if (nav.startsWith("ja")) return "ja";
  if (nav.startsWith("ko")) return "ko";
  if (nav.startsWith("pl")) return "pl";
  if (nav.startsWith("tr")) return "tr";
  if (nav.startsWith("nl")) return "nl";
  return "pt";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("pt");

  useEffect(() => {
    setLangState(detectLang());
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("ott-lang", l);
    const rtl = LANGS.find((x) => x.code === l)?.rtl ?? false;
    document.documentElement.dir = rtl ? "rtl" : "ltr";
    document.documentElement.lang = l;
  };

  useEffect(() => {
    const rtl = LANGS.find((x) => x.code === lang)?.rtl ?? false;
    document.documentElement.dir = rtl ? "rtl" : "ltr";
    document.documentElement.lang = lang;
  }, [lang]);

  const t = (key: keyof Translations): string => T[lang][key] ?? T.pt[key];
  const dir: "ltr" | "rtl" =
    (LANGS.find((x) => x.code === lang)?.rtl ? "rtl" : "ltr");

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, dir }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}

export { LANGS };
