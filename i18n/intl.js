var en = require("./translations.en.json");
var mk = require("./translations.mk.json");

class Intl {
  constructor() {
    this.translations = {
      en,
      mk,
    };
    this.defaultLang = "mk";
    this.useBrowserDefault = true;
    this.languageDataStore = "query";
  }

  getTranslation = (lang, key) => {
    return this.translations[lang][key];
  };
}

module.exports = Intl;