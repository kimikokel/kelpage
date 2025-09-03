import { useState, useEffect } from 'react';
import en from '../locales/en.json';
import zh from '../locales/zh.json';

const translations = {
  en,
  zh,
};

export const useTranslation = () => {
  const [locale, setLocale] = useState('en'); // Always default to English
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    // Get saved language from localStorage, but always default to English first
    const savedLocale = localStorage.getItem('locale');
    
    // Only use saved locale if it exists and is valid, otherwise stay with English
    if (savedLocale && (savedLocale === 'en' || savedLocale === 'zh')) {
      setLocale(savedLocale);
    }
    // Note: Removed browser language detection to always default to English
    
    setIsInitialized(true);
  }, []);

  const t = (key: string) => {
    const keys = key.split('.');
    let value: any = translations[locale as keyof typeof translations];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };

  const switchLanguage = (newLocale: string) => {
    setLocale(newLocale);
    localStorage.setItem('locale', newLocale);
    
    // Refresh the page to ensure all components re-render with new language
    window.location.reload();
  };

  return {
    t,
    locale,
    switchLanguage,
    isInitialized,
    isRTL: false, // Add if you need RTL support later
  };
};

export default useTranslation;
