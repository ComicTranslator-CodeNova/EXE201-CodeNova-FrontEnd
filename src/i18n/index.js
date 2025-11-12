import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// import file dịch cho từng namespace
import enHome from "./en/home.json";
import viHome from "./vi/home.json";
import enLogin from "./en/login.json";
import viLogin from "./vi/login.json";
import viHeader from "./vi/header.json";
import enHeader from "./en/header.json";

const savedLang = localStorage.getItem("lang") || "en";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        home: enHome,
        login: enLogin,
        header: enHeader,
      },
      vi: {
        home: viHome,
        login: viLogin,
        header: viHeader,
      }
    },
    lng: savedLang,
    fallbackLng: "en",
    ns: ["common", "home", "login"], // danh sách namespace
    defaultNS: "common",
    interpolation: { escapeValue: false }
  });

export default i18n;
