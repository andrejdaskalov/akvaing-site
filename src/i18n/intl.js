var en = require("./translations.en.json");
var mk = require("./translations.mk.json");

class Intl {
    constructor() {
        this.translations = {
            en,
            mk,
        };
        this.defaultLang = "mk";
    }

    getTranslation = (lang, key) => {
        return this.translations[lang][key] !== undefined && this.translations[lang][key] !== null && this.translations[lang][key].length > 0
            ? this.translations[lang][key]
            : key;
    };

    readLocale = () => {
        const lang = window.localStorage.getItem("lang");
        return lang !== null && lang !== undefined && lang.length > 0 ? lang : this.defaultLang;
    };

    setLocale = (lang) => {
        window.localStorage.setItem("lang", lang);
    };

}

module.exports = Intl;