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
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedLang = localStorage.getItem("language") as Language | null;
    if (savedLang) setLanguageState(savedLang);
    setMounted(true);
    document.documentElement.classList.remove("dark"); // Force light mode
  }, []);

  useEffect(() => {
    if (mounted) {
      document.documentElement.lang = language;
      localStorage.setItem("language", language);
    }
  }, [language, mounted]);

  return (
    <AppContext.Provider value={{ language, setLanguage: setLanguageState, dark: false, setDark: () => {}, mounted }}>
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
