import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { TRANSLATION_FILE_PATH } from './utils/constants';
import HttpApi from "i18next-http-backend"

i18n
    .use(Backend).use(LanguageDetector).use(initReactI18next).use(HttpApi)
    .init({
        lng: ['en', 'hi', 'es', 'ar', 'ur'],
        backend: {
            loadPath: TRANSLATION_FILE_PATH 
        },
        fallbackLng: 'en',
        detection: {
            order: ['cookie', 'htmlTag', 'localStorage', 'path', 'subdomain'],
            caches: ['cookie'],
        },
        debug: false,
        ns: ['translations'],
        defaultNS: 'translations',
        keySeparator: false,
        interpolation: {
            escapeValue: false,
            formatSeparator: ','
        },
        react: {
            useSuspense: false
        }
    });

export default i18n;