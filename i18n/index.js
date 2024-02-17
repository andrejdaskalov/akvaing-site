var en = require("./translations.en.json");
var mk = require("./translations.mk.json");

const i18n = {
  translations: {
    en,
    mk,
  },
  defaultLang: "mk",
  useBrowserDefault: true,
  // optional property will default to "query" if not set
  languageDataStore: "query" || "localStorage",
};

module.exports = i18n;