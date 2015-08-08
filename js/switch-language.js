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

    selectLanguage(lang);
});

function switchLanguage(lang) {
    localStorage.setItem("selected-language", lang);
    translate();
}

function translate() {
    var lang = localStorage.getItem("selected-language");
    i18n.changeLanguage(lang);
    selectLanguage(lang);
}

function selectLanguage(lang) {
    $(".lang-flag").removeClass('lang-selected');
    $(".lang-" + lang).addClass('lang-selected');
}
