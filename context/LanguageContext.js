import { createContext, useContext, useState } from 'react'
import en from '@/data/translations/en.json'
import fr from '@/data/translations/fr.json'

const translations = { en, fr }

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('en')

  const toggle = () => setLang((l) => (l === 'en' ? 'fr' : 'en'))

  const t = (key) => {
    const keys = key.split('.')
    let value = translations[lang]
    for (const k of keys) {
      value = value?.[k]
    }
    return value ?? key
  }

  return (
    <LanguageContext.Provider value={{ lang, toggle, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useTranslation = () => useContext(LanguageContext)
