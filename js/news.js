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
                "24<br/>Sep" +
            "</span>" +
            "<span>" +
                "24<br/>Sep" +
            "</span>" +
            "<span>" +
                "24<br/>Altro" +
            "</span>",
        "title": "Recording in Pescara *" +
                 "Incisione a Pescara *" +
                 "レコーディングin Pescara",
        "imgSmall": "http://placehold.it/146x146",
        "imgMedium": "http://placehold.it/350x350",
        "imgLarge": "http://placehold.it/673x444",
        "intro": "Recording in Pescara *" +
                 "Incisione a Pescara *" +
                 "レコーディングin Pescara",
        "txt":[
            {
                "txt": "Dal 20 sono a Pescara per la registrazione del primo CD di Duo Vagues! *" +
                       "Dal 20 Settembre sarò a Pescara per la registrazione del primo CD del Duo Vagues! *" +
                       "20日から5日間、デュオ・ヴァーグのCD録音の為ペスカーラに滞在します。"
            },
            {
                "img":"http://placehold.it/673x444"
            },
            {
                "txt": "Dal 20 sono a Pescara per la registrazione del primo CD di Duo Vagues! *" +
                       "Abbiamo fatto la prima sezione a Giugno e saremmo dovuti tornare per la seconda a Luglio, ma abbiamo dovuto rinunciare per il terribile caldo. Ora siamo più freschi dopo le vacanze! Registreremo i due pezzi più tosti. *" +
                       "6月末に既に4曲録音済みで、7月に残りの大曲2曲を録音しに戻る予定だったのですが、猛暑の為に延期。8月はアンドレアの地元サルデーニャでバカンスしてリフレッシュ、涼しくなるのを待って再挑戦です。"
            },
            {
                "quote": "Dal 20 sono a Pescara per la registrazione del primo CD di Duo Vagues! *" +
                         "Chissà come verrà la foto della copertina! *" +
                         "ジャケット用の写真撮影も楽しみ！",
                "img": "http://placehold.it/281x239"
            },
            {
                "txt": "Dal 20 sono a Pescara per la registrazione del primo CD di Duo Vagues! *" +
                       "Il nostro CD è prodotto da Odradek Records, e sarà messo in vendita da Marzo 2016. *" +
                       "CDはOdradek Recordsから2016年3月に発売開始予定です。"
            }
        ]
    },
    {
        "orderedDate": 20150910,
        "homeDate": "18 September, 2015 *18 Settembre 2015 *２０１５年９月１８日",
        "date":"24<br/>Sep",
        "title":"Lorem ipsum dolor sit amet",
        "imgSmall": "http://placehold.it/146x146",
        "imgMedium": "http://placehold.it/350x350",
        "imgLarge": "http://placehold.it/673x444",
        "intro": "Recording in Pescara *" +
                 "Incisione a Pescara *" +
                 "レコーディングin Pescara",
        "txt":[
            {
                "txt":"Fusce imperdiet metus sit amet lorem pellentesque, et suscipit lectus tempus. Aliquam dui neque, venenatis a convallis eu, sodales vitae justo. Donec nec neque purus. Sed sed nisi vestibulum, mollis ligula vel sem nulla faucibus ante.<br/><br/>Morbi feugiat urna quis nulla sodales molestie ac vitae elit. Morbi risus lectus, volutpat nec sagittis vitae, mollis et nisi. Curabitur vel neque vitae diam dapibus semper a sit amet urna. Nullam cursus velit justo. Nullam euismod, arcu sit amet semper sagittis, sem nulla faucibus ante, vitae adipiscing mi metus faucibus sapien. Nulla dictum eget metus et gravida. Donec vulputate mi ac facilisis fringilla. Proin scelerisque lorem dictum tincidunt iaculis."
            },
            {
                "quote":"Vivamos odio augue, <span>aliquet eget</span> hendrerit nec, tempus sit amet lacus. Nunc suscipit nisl eu elit <span>mollis sit amet</span> fringilla elit eleifend.",
                "img":"http://placehold.it/281x239"
            },
            {
                "txt":"Fusce imperdiet metus sit amet lorem pellentesque, et suscipit lectus tempus. Aliquam dui neque, venenatis a convallis eu, sodales vitae justo. Donec nec neque purus. Sed sed nisi vestibulum, mollis ligula vel sem nulla faucibus ante.</p><p>Morbi feugiat urna quis nulla sodales molestie ac vitae elit. Morbi risus lectus, volutpat nec sagittis vitae, mollis et nisi. Curabitur vel neque vitae diam dapibus semper a sit amet urna. Nullam cursus velit justo. Nullam euismod, arcu sit amet semper sagittis, sem nulla faucibus ante, vitae adipiscing mi metus faucibus sapien. Nulla dictum eget metus et gravida. Donec vulputate mi ac facilisis fringilla. Proin scelerisque lorem dictum tincidunt iaculis."
            },
            {
                "title":"Watch the best moments from last night concert",
                "txt":"Example of Vimeo embed video",
                "vimeo":"http://player.vimeo.com/video/74972181"
            },
            {
                "title":"Watch the best moments from last night concert",
                "txt":"Example of YouTube embed video",
                "youtube":"http://www.youtube.com/embed/1iIZeIy7TqM"
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

function populateOtherNews(mainNewsId) {
    orderedNews.forEach(function(element, index, array){
        if(element.orderedDate !== mainNewsId) {

            var otherNews = "<li data-news-details='" + JSON.stringify([element]) + "'>" +
                                "<div class=\"other-news-img-wrap\">" +
                                    "<div class=\"date\" data-translatable data-no-cache>" + element.date + "</div>" +
                                    "<img src=\"" + element.imgSmall + "\" alt=\"\" />" +
                                "</div>" +
                                "<div class=\"other-news-details\">" +
                                    "<h4 data-translatable data-no-cache>" + element.title + "</h4>" +
                                    "<p data-translatable data-no-cache>" + element.intro + "</p>" +
                                "</div>" +
                            "</li>";

            $("#other-news").append(otherNews);
        }
    });
}
