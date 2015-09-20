/**
 * Created by misa on 19/09/15.
 */

var orderedNews,
    news = [
    {
        "orderedDate": 20150918,
        "homeDate": "18 September, 2015 *18 Settembre 2015 *２０１５年９月１８日",
        "date":
                "<span>" +
                    "18<br/>Sep" +
                "</span>" +
                "<span>" +
                    "18<br/>Set" +
                "</span>" +
                "<span>" +
                    "18日<br/>9月" +
                "</span>",
        "title": "Recording in Pescara *" +
                 "Incisione a Pescara *" +
                 "レコーディングin Pescara",
        "imgSmall": "img/news/20150918/beach_small.jpg",
        "imgMedium": "img/news/20150918/beach_medium.jpg",
        "imgLarge": "img/news/20150918/beach_large.jpg",
        "intro": "Since 20th September I will be in Pescara for the recording of the first CD of the Duo Vagues! *" +
                 "Dal 20 Settembre sarò a Pescara per la registrazione del primo CD del Duo Vagues! *" +
                 "20日から5日間、デュオ・ヴァーグのCD録音の為ペスカーラに滞在します。",
        "txt":[
            {
                "txt": "Since 20 September I will be in Pescara for the recording of the first CD of the Duo Vagues! *" +
                       "Dal 20 Settembre sarò a Pescara per la registrazione del primo CD del Duo Vagues! *" +
                       "20日から5日間、デュオ・ヴァーグのCD録音の為ペスカーラに滞在します。"
            },
            {
                "img":"img/news/20150918/piano.jpg"
            },
            {
                "txt": "We did the first section in June and we should go back for the second in July, but we had to give up for the terrible heat. Now we are more fresh after the holidays! We will record the two tougher pieces. *" +
                       "Abbiamo fatto la prima sezione a Giugno e saremmo dovuti tornare per la seconda a Luglio, ma abbiamo dovuto rinunciare per il terribile caldo. Ora siamo più freschi dopo le vacanze! Registreremo i due pezzi più tosti. *" +
                       "6月末に既に4曲録音済みで、7月に残りの大曲2曲を録音しに戻る予定だったのですが、猛暑の為に延期。8月はアンドレアの地元サルデーニャでバカンスしてリフレッシュ、涼しくなるのを待って再挑戦です。"
            },
            {
                "quote": "Who knows how it will be the cover photo! *" +
                         "Chissà come verrà la foto della copertina! *" +
                         "ジャケット用の写真撮影も楽しみ！",
                "img": "img/news/20150918/duo_vagues.jpg"
            },
            {
                "txt":  "<span>" +
                            "Our CD is produced by <a href=\"http://www.odradek-records.com/\">Odradek Records</a>, and will go on sale from March 2016." +
                        "</span>" +
                        "<span>" +
                            "Il nostro CD è prodotto da <a href=\"http://www.odradek-records.com/\">Odradek Records</a>, e sarà messo in vendita da Marzo 2016." +
                        "</span>" +
                        "<span>" +
                            "CDは<a href=\"http://www.odradek-records.com/\">Odradek Records</a>から2016年3月に発売開始予定です。" +
                        "</span>"
            }
        ]
    },
    {
        "orderedDate": 20150919,
        "homeDate": "19 September, 2015 *19 Settembre 2015 *２０１５年９月１９日",
        "date":
                "<span>" +
                    "19<br/>Sep" +
                "</span>" +
                "<span>" +
                    "19<br/>Set" +
                "</span>" +
                "<span>" +
                    "19日<br/>9月" +
                "</span>",
        "title": "Masterclass in Saxophone and Chamber Music *" +
                 "Masterclass in Saxofono e Musica da Camera *" +
                 "サクソフォンと室内楽の為のマスタークラス",
        "imgSmall": "img/news/20150919/pamphlet_small.jpg",
        "imgMedium": "img/news/20150919/pamphlet_medium.jpg",
        "imgLarge": "img/news/20150919/pamphlet_large.jpg",
        "intro": "There will be a masterclass of the Duo Vagues on 17 and 18 October in Alghero. *" +
                 "Si svolgerà un masterclass del Duo Vagues il 17 e 18 ottobre ad Alghero. *" +
                 "10月17、18日にサルデーニャ島のアルゲーロ市にてDuo Vaguesのマスタークラスを開講することになりました。",
        "txt":[
            {
                "txt": "There will be a masterclass of the Duo Vagues on 17 and 18 October in Alghero. Two years ago I was the accompanist at the masterclass for saxophonists in Sanluri. This time we open the doors to groups of chamber music! *" +
                       "Si svolgerà un masterclass del Duo Vagues il 17 e 18 ottobre ad Alghero. Due anni fa sono stata l’accompagnatrice del masterclass per saxofonisti a Sanluri. Questa volta apriamo le porte anche ai gruppi di musica da camera! *" +
                       "10月17、18日にサルデーニャ島のアルゲーロ市にてDuo Vaguesのマスタークラスを開講することになりました。２年前には、サルデーニャ島の南、サンルーリ市で行われたサックスのマスタークラスで伴奏を務めましたが、今回は対象者を室内楽まで広げて募集しています！"
            }
        ]
    },
    {
        "orderedDate": 20150917,
        "homeDate": "17 September, 2015 *17 Settembre 2015 *２０１５年９月１７日",
        "date":
                "<span>" +
                    "17<br/>Sep" +
                "</span>" +
                "<span>" +
                    "17<br/>Set" +
                "</span>" +
                "<span>" +
                    "17日<br/>9月" +
                "</span>",
        "title": "Coop Music Awards *" +
                 "Coop Music Awards *" +
                 "Coop Music Awards",
        "imgSmall": "img/news/20150917/competition_small.png",
        "imgMedium": "img/news/20150917/competition_medium.png",
        "imgLarge": "img/news/20150917/competition_large.png",
        "intro": "I will be at the International Singing Competition “Premio Antonio Bertolini” as official accompanist. *" +
                 "Sarò al concorso internazionale di canto “Premio Antonio Bertolini” come accompagnatrice ufficiale. *" +
                 "声楽コンクール「アントニオ・ベルトリーニ」の公式伴奏者を務めることになりました。",
        "txt":[
            {
                "txt":  "<span>" +
                            "I will be at the International Singing Competition <a href=\"http://premioantoniobertolini.altervista.org/\">“Premio Antonio Bertolini”</a> as official accompanist. It will take place in Milan (<a href=\"http://www.spazioteatro89.org/\">Spazio Teatro 89</a> and Auditorium Giorgio Gaber del Grattacielo Pirelli) from 8 to 10 October." +
                        "</span>" +
                        "<span>" +
                            "Sarò al concorso internazionale di canto <a href=\"http://premioantoniobertolini.altervista.org/\">“Premio Antonio Bertolini”</a> come accompagnatrice ufficiale. Si svolgerà a Milano (<a href=\"http://www.spazioteatro89.org/\">Spazio Teatro 89</a> e Auditorium Giorgio Gaber del Grattacielo Pirelli) dall’8 al 10 ottobre." +
                        "</span>" +
                        "<span>" +
                            "声楽コンクール<a href=\"http://premioantoniobertolini.altervista.org/\">「アントニオ・ベルトリーニ」</a>の公式伴奏者を務めることになりました。コンクール会場はミラノの<a href=\"http://www.spazioteatro89.org/\">Spazio Teatro 89</a> と Auditorium Giorgio Gaber del Grattacielo Pirelliで、10月8日から3日間開催されます。" +
                        "</span>"
            }
        ]
    }
];

$(function() {
    orderedNews = sortNews();

    $(".news-item").each(function(index, element){
        var news = orderedNews[index];
        $(element).children(".news-img").html("<img src='" + news.imgMedium + "' alt='' />");
        $(element).children(".news").data("news-details", JSON.stringify([news]));
        $(element).children(".news").children(".news-title").html(news.title);
        $(element).children(".news").children(".news-date").html(news.homeDate);
    });
});

function sortNews() {
    return news.sort(compareDates)
}

function compareDates(a, b) {
    return -(a.orderedDate - b.orderedDate);
}