"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type Language = "sw" | "en";

interface AppContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  dark: boolean;
  setDark: (dark: boolean) => void;
  mounted: boolean;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("sw");
  const [dark, setDarkState] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedLang = localStorage.getItem("language") as Language | null;
    const savedTheme = localStorage.getItem("theme");
    if (savedLang) setLanguageState(savedLang);
    if (savedTheme) setDarkState(savedTheme === "dark");
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      document.documentElement.classList.toggle("dark", dark);
      localStorage.setItem("theme", dark ? "dark" : "light");
    }
  }, [dark, mounted]);

  useEffect(() => {
    if (mounted) {
      document.documentElement.lang = language;
      localStorage.setItem("language", language);
    }
  }, [language, mounted]);

  return (
    <AppContext.Provider value={{ language, setLanguage: setLanguageState, dark, setDark: setDarkState, mounted }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
}
