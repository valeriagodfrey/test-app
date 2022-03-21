import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import { TRANSLATIONS_EN } from "./en/translationsEN";
import { TRANSLATIONS_RU } from "./ru/translationsRU";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: TRANSLATIONS_EN,
      },
      ru: {
        translation: TRANSLATIONS_RU,
      },
    },
  });

i18n.changeLanguage("ru");

export default i18n;
