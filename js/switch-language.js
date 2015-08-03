/**
 * Created by misa on 02/08/15.
 */

var i18n;

$(function() {
    var lang = localStorage.getItem("selected-language");
    if(!lang) {
        lang = 'en'
    }
    
    i18n = window.domI18n({
        separator: ' *',
        languages: ['en', 'it', 'jpn'],
        currentLanguage: lang
    });
});

function switchLanguage(lang) {
    localStorage.setItem("selected-language", lang);
    translate();
}

function translate() {
    i18n.changeLanguage(localStorage.getItem("selected-language"));
}