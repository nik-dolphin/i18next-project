import i18n from "i18next";
import detector from "i18next-browser-languagedetector";
import backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

i18n
  .use(detector)
  .use(backend)
  .use(initReactI18next)
  .init({
    supportedLngs: ["en", "fr", "ar"],
    fallbackLng: "en",
    debug: true,
    detection: {
      order: ["path", "htmlTag", "cookies", "localStorage", "subdomain"],
      caches: ["localStorage", "cookie"], // cache user language on
    },
    backend: {
      loadPath: "/locales/{{lng}}/translation.json",
    },
    saveMissing: true,
  });

export default i18n;
