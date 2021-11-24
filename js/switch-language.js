/**
 * Created by misa on 02/08/15.
 */

var i18n;

$(function() {
    // var lang = retrieveLanguage();
    var lang = 'jpn';
    initI18n(lang);
    translateLang(lang);
});

function switchLanguage(lang) {
    localStorage.setItem("selected-language", lang);
    translateLang(lang);
}

function initI18n(lang) {
    i18n = window.domI18n({
        separator: ' *',
        languages: ['en', 'it', 'jpn'],
        currentLanguage: lang
    });
}

function resetLanguage() {
    var lang = retrieveLanguage();
    resetLang(lang);
}

function resetLang(lang) {
    i18n.clearCachedElements();
    translateLang(lang)
}

function translate() {
    var lang = retrieveLanguage();
    translateLang(lang);
}

function translateLang(lang) {
    i18n.changeLanguage(lang);
    selectLanguage(lang);
}

function retrieveLanguage() {
    var lang = localStorage.getItem("selected-language");
    if (!lang) {
        lang = 'en'
    }
    return lang
}

function selectLanguage(lang) {
    $(".lang-flag").removeClass('lang-selected');
    $(".lang-" + lang).addClass('lang-selected');
}