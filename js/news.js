//TODO need to remove unnecessary attribute date
var orderedNews,
    news = [
    {
        orderedDate: 20150918,
        homeDate: "18 September, 2015 *18 Settembre 2015 *２０１５年９月１８日",
        date:
                "<span>" +
                    "18<br/>Sep" +
                "</span>" +
                "<span>" +
                    "18<br/>Set" +
                "</span>" +
                "<span>" +
                    "18日<br/>9月" +
                "</span>",
        title: "Recording in Pescara *" +
                 "Incisione a Pescara *" +
                 "レコーディングin Pescara",
        imgSmall: "img/news/20150918/beach_small.jpg",
        imgMedium: "img/news/20150918/beach_medium.jpg",
        imgLarge: "img/news/20150918/beach_large.jpg",
        intro: "Since 20th September I will be in Pescara for the recording of the first CD of the Duo Vagues! *" +
                 "Dal 20 Settembre sarò a Pescara per la registrazione del primo CD del Duo Vagues! *" +
                 "20日から5日間、デュオ・ヴァーグのCD録音の為ペスカーラに滞在します。",
        txt:[
            {
                txt: "Since 20 September I will be in Pescara for the recording of the first CD of the Duo Vagues! *" +
                       "Dal 20 Settembre sarò a Pescara per la registrazione del primo CD del Duo Vagues! *" +
                       "20日から5日間、デュオ・ヴァーグのCD録音の為ペスカーラに滞在します。"
            },
            {
                img:"img/news/20150918/piano.jpg"
            },
            {
                txt: "We did the first section in June and we should go back for the second in July, but we had to give up for the terrible heat. Now we are more fresh after the holidays! We will record the two tougher pieces. *" +
                       "Abbiamo fatto la prima sezione a Giugno e saremmo dovuti tornare per la seconda a Luglio, ma abbiamo dovuto rinunciare per il terribile caldo. Ora siamo più freschi dopo le vacanze! Registreremo i due pezzi più tosti. *" +
                       "6月末に既に4曲録音済みで、7月に残りの大曲2曲を録音しに戻る予定だったのですが、猛暑の為に延期。8月はアンドレアの地元サルデーニャでバカンスしてリフレッシュ、涼しくなるのを待って再挑戦です。"
            },
            {
                "quote": "Who knows how it will be the cover photo! *" +
                         "Chissà come verrà la foto della copertina! *" +
                         "ジャケット用の写真撮影も楽しみ！",
                img: "img/news/20150918/duo_vagues.jpg"
            },
            {
                txt:  "<span>" +
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
        orderedDate: 20150919,
        homeDate: "19 September, 2015 *19 Settembre 2015 *２０１５年９月１９日",
        date:
            "<span>" +
                "19<br/>Sep" +
            "</span>" +
            "<span>" +
                "19<br/>Set" +
            "</span>" +
            "<span>" +
                "19日<br/>9月" +
            "</span>",
        title: "Masterclass in Saxophone and Chamber Music *" +
               "Masterclass in Saxofono e Musica da Camera *" +
               "サクソフォンと室内楽の為のマスタークラス",
        imgSmall: "img/news/20150919/pamphlet_small.jpg",
        imgMedium: "img/news/20150919/pamphlet_medium.jpg",
        imgLarge: "img/news/20150919/pamphlet_large.jpg",
        intro: "There will be a masterclass of the Duo Vagues on 17 and 18 October in Alghero. *" +
                 "Si svolgerà un masterclass del Duo Vagues il 17 e 18 ottobre ad Alghero. *" +
                 "10月17、18日にサルデーニャ島のアルゲーロ市にてDuo Vaguesのマスタークラスを開講することになりました。",
        txt:[
            {
                txt: "There will be a masterclass of the Duo Vagues on 17 and 18 October in Alghero. Two years ago I was the accompanist at the masterclass for saxophonists in Sanluri. This time we open the doors to groups of chamber music! *" +
                       "Si svolgerà un masterclass del Duo Vagues il 17 e 18 ottobre ad Alghero. Due anni fa sono stata l’accompagnatrice del masterclass per saxofonisti a Sanluri. Questa volta apriamo le porte anche ai gruppi di musica da camera! *" +
                       "10月17、18日にサルデーニャ島のアルゲーロ市にてDuo Vaguesのマスタークラスを開講することになりました。２年前には、サルデーニャ島の南、サンルーリ市で行われたサックスのマスタークラスで伴奏を務めましたが、今回は対象者を室内楽まで広げて募集しています！"
            }
        ]
    },
    {
        orderedDate: 20150917,
        homeDate: "17 September, 2015 *17 Settembre 2015 *２０１５年９月１７日",
        date:
                "<span>" +
                    "17<br/>Sep" +
                "</span>" +
                "<span>" +
                    "17<br/>Set" +
                "</span>" +
                "<span>" +
                    "17日<br/>9月" +
                "</span>",
        title: "Coop Music Awards *" +
                 "Coop Music Awards *" +
                 "Coop Music Awards",
        imgSmall: "img/news/20150917/competition_small.png",
        imgMedium: "img/news/20150917/competition_medium.png",
        imgLarge: "img/news/20150917/competition_large.png",
        intro: "I will be at the International Singing Competition “Premio Antonio Bertolini” as official accompanist. *" +
                 "Sarò al concorso internazionale di canto “Premio Antonio Bertolini” come accompagnatrice ufficiale. *" +
                 "声楽コンクール「アントニオ・ベルトリーニ」の公式伴奏者を務めることになりました。",
        txt:[
            {
                txt:  "<span>" +
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
    },
    {
        orderedDate: 20151016,
        homeDate: "16 October, 2015 *16 Ottobre 2015 *２０１５年１０月１６日",
        date:
            "<span>" +
                "16<br/>Oct" +
            "</span>" +
            "<span>" +
                "16<br/>Ott" +
            "</span>" +
            "<span>" +
                "16日<br/>10月" +
            "</span>",
        title: "Duo Vagues in Sardinia *" +
                 "Duo Vagues in Sardegna *" +
                 "デュオ・ヴァーグ in サルデーニャ",
        imgSmall: "img/news/20151016/sardinia_concert_small.jpg",
        imgMedium: "img/news/20151016/sardinia_concert_medium.jpg",
        imgLarge: "img/news/20151016/sardinia_concert_large.jpg",
        intro: "古い小道が情緒を醸し出す、カリアリのお城周辺地域のサロンで、デュオ・ヴァーグのリサイタルを行いました。 *" +
                 "Si è svolto il recital del Duo Vagues in un salone a Cagliari, nella zona di castello dove le stradine belle ci portano nell’epoca antica. *" +
                 "古い小道が情緒を醸し出す、カリアリのお城周辺地域のサロンで、デュオ・ヴァーグのリサイタルを行いました。",
        txt:[
            {
                txt:  "<span>" +
                            "１０月１６日、古い小道が情緒を醸し出す、カリアリのお城周辺地域のサロンで、デュオ・ヴァーグのリサイタルを行いました。<a href=\"http://www.cagliari2015.eu/eventi/“vagues-duo”-andrea-mocci-megumi-nakanomori-la-marche-dans-le-désert-concerto\">イベントのページはここをクリック</a>" +
                        "</span>" +
                        "<span>" +
                            "Il 16 ottobre si è svolto il recital del Duo Vagues in un salone a Cagliari, nella zona di castello dove le stradine belle ci portano nell’epoca antica. <a href=\"http://www.cagliari2015.eu/eventi/“vagues-duo”-andrea-mocci-megumi-nakanomori-la-marche-dans-le-désert-concerto\">Qui l’articolo dell’evento.</a>" +
                        "</span>" +
                        "<span>" +
                            "１０月１６日、古い小道が情緒を醸し出す、カリアリのお城周辺地域のサロンで、デュオ・ヴァーグのリサイタルを行いました。<a href=\"http://www.cagliari2015.eu/eventi/“vagues-duo”-andrea-mocci-megumi-nakanomori-la-marche-dans-le-désert-concerto\">イベントのページはここをクリック</a>" +
                        "</span>"
            },
            {
                txt:  "サックス奏者アンドレア・モッチ（国立カリアリ音楽院講師）とデュオを結成したのは２０１２年春ですから、もう３年以上一緒に演奏していることになります。今回のプログラムは、既に私たちのレパートリーであるミヨーのスカラムーシュ、クレストンのソナタ、シューロフのホット・ソナタに、新しくドビュッシーのラプソディを加え、アンコールにはジョリヴェの小品アンプロンロチュ・ファンタジーを演奏しました。ミヨー、ジョリヴェ、クレストンは来春発売予定のCDにも収録されています。 *" +
                        "Il duo con saxofonista Andrea Mocci (insegnante del conservatorio di Cagliari) si è costruito in primavera del 2012, ormai suoniamo insieme da più di tre anni. Questa volta nel programma abbiamo aggiunto un nuovo pezzo Rapsodie di Debussy al nostro repertorio Scaramouche di Milhaud, Sonata di Creston, Hot Sonata di Schulhoff e abbiamo eseguito Fantasie-Impromptu di Jolivet per bis. Milhaud, Jolivet e Creston sono inseriti al nostro primo CD che saranno messi in vendita questa primavera. *" +
                        "サックス奏者アンドレア・モッチ（国立カリアリ音楽院講師）とデュオを結成したのは２０１２年春ですから、もう３年以上一緒に演奏していることになります。今回のプログラムは、既に私たちのレパートリーであるミヨーのスカラムーシュ、クレストンのソナタ、シューロフのホット・ソナタに、新しくドビュッシーのラプソディを加え、アンコールにはジョリヴェの小品アンプロンロチュ・ファンタジーを演奏しました。ミヨー、ジョリヴェ、クレストンは来春発売予定のCDにも収録されています。"
            },
            {
                img:  "img/news/20151016/room.jpg"
            },
            {
                txt:  "アンティークな装飾と暗めの照明で雰囲気抜群の部屋。聴き手との距離が近く、反応がダイレクトに感じられるのは、サロンコンサートの醍醐味です。 *" +
                        "Il salone è molto bello, profumo dei periodi antichi... È molto particolare il concerto al salone, essendo vicino al palco c’è uno scambio di sentimenti molto diretto tra gli esecutori e il pubblico. *" +
                        "アンティークな装飾と暗めの照明で雰囲気抜群の部屋。聴き手との距離が近く、反応がダイレクトに感じられるのは、サロンコンサートの醍醐味です。"
            },
            {
                img:  "img/news/20151016/seaport.jpg"
            },
            {
                txt:  "演奏会翌日は早朝に出発し、車で３時間サルデーニャを縦断。アルゲーロの音楽学校で２日間のサックス・マスタークラスを行いました。私は生徒さんの伴奏をしながら、サックスという楽器のメカニック・テクニックを学ぶいい機会になりました。 *" +
                        "Il giorno dopo siamo partiti la mattina presto, abbiamo attraversato la Sardegna da nord a sud, per tre ore di viaggio con la macchina. Ad Alghero abbiamo tenuto la masterclass di saxofono. È stata un’occasione utile anche per me per approfondire la consapevolezza sulla meccanica e la tecnica di saxofono. *" +
                        "演奏会翌日は早朝に出発し、車で３時間サルデーニャを縦断。アルゲーロの音楽学校で２日間のサックス・マスタークラスを行いました。私は生徒さんの伴奏をしながら、サックスという楽器のメカニック・テクニックを学ぶいい機会になりました。"
            },
            {
                img:  "img/news/20151016/scalinata.jpg"
            },
            {
                img:  "img/news/20151016/piano_room.jpg"
            },
            {
                txt:  "ファンタジー溢れるイタリアとは言え、この音楽学校内の、ここまでやるか！な装飾には驚きました。なんとも楽しい空間です。 *" +
                        "L’interno di questa scuola è incredibile, pieno di fantasia! *" +
                        "ファンタジー溢れるイタリアとは言え、この音楽学校内の、ここまでやるか！な装飾には驚きました。なんとも楽しい空間です。"
            },
            {
                txt:  "最終日には、生徒さんたちのミニコンサートで私達デュオも一曲披露させていただきました。 *" +
                        "L’ultimo giorno della masterclass al saggio degli allievi abbiamo eseguito un pezzo anche come duo. *" +
                        "最終日には、生徒さんたちのミニコンサートで私達デュオも一曲披露させていただきました。"
            },
            {
                img:  "img/news/20151016/duo_vagues.jpg"
            },
            {
                txt:  "４日間、毎食美味しい料理をいただき、のんびりした空気の中で音楽を楽しみ、リフレッシュしてミラノへ戻ってきました。サルデーニャ島に滞在したのは３度目ですが、私にとってはパラダイス、すっかり島のファンです！ *" +
                        "Ho passato quattro giorni di cucina meravigliosa e aria tranquilla, godendo della musica più del solito. Per me la Sardegna è un’isola paradiso; era già la terza volta ma mi innamoro sempre di più! *" +
                        "４日間、毎食美味しい料理をいただき、のんびりした空気の中で音楽を楽しみ、リフレッシュしてミラノへ戻ってきました。サルデーニャ島に滞在したのは３度目ですが、私にとってはパラダイス、すっかり島のファンです！"
            }
        ]
    },
    {
        orderedDate: 20160129,
        homeDate: "29 January, 2016 *29 Gennaio 2016 *２０１６年１月２９日",
        date:
            "<span>" +
                "29<br/>Jan" +
            "</span>" +
            "<span>" +
                "29<br/>Gen" +
            "</span>" +
            "<span>" +
                "29日<br/>1月" +
            "</span>",
        title: "つじ村ふみ惠 ソプラノリサイタル *" +
                 "Fumie Tsujimura Soprano recital *" +
                 "つじ村ふみ惠 ソプラノリサイタル",
        imgSmall: "img/news/20160129/pamphlet_front_small.jpg",
        imgMedium: "img/news/20160129/pamphlet_front_medium.jpg",
        imgLarge: "img/news/20160129/pamphlet_front_large.jpg",
        intro: "友人からの紹介で、名古屋出身のソプラノ歌手つじ村ふみ惠さんのリサイタルの伴奏を務めさせていただくことになりました。 *" +
                 "Tramite un’amica ho avuto questa occasione di accompagnare il soprano Fumie Tsujimura, di Nagoya, al suo recital. *" +
                 "友人からの紹介で、名古屋出身のソプラノ歌手つじ村ふみ惠さんのリサイタルの伴奏を務めさせていただくことになりました。",
        txt:[
            {
                txt: "友人からの紹介で、名古屋出身のソプラノ歌手つじ村ふみ惠さんのリサイタルの伴奏を務めさせていただくことになりました。メールのやり取りをするうちに、ちょうど同時期に渡伊していたことが分かり、御縁を感じています。名古屋で演奏の機会いただいたのは初めてなのでワクワク。プログラムは、ベッリーニ、ドニゼッティ、ロッシーニ、そしてピアノソロ2曲も含めてイタリア一色です！沢山の方のご来場、お待ちしています。 *" +
                       "Tramite un’amica ho avuto questa occasione di accompagnare il soprano Fumie Tsujimura, di Nagoya, al suo recital. Contattandoci via mail abbiamo scoperto che ci siamo trasferite in Italia lo stesso periodo. È bello conoscere una collega così e non vedo l’ora di suonare a Nagoya visto che è la prima esperienza per me! Il programma sarà composto dalla musica di Bellini, Donizetti e Rossini. Suonerò anche due pezzi per pianoforte, sempre di musica italiana. Spero di vedervi in tanti, venite tutti a Nagoya! *" +
                       "友人からの紹介で、名古屋出身のソプラノ歌手つじ村ふみ惠さんのリサイタルの伴奏を務めさせていただくことになりました。メールのやり取りをするうちに、ちょうど同時期に渡伊していたことが分かり、御縁を感じています。名古屋で演奏の機会いただいたのは初めてなのでワクワク。プログラムは、ベッリーニ、ドニゼッティ、ロッシーニ、そしてピアノソロ2曲も含めてイタリア一色です！沢山の方のご来場、お待ちしています。"
            },
            {
                img:"img/news/20160129/pamphlet_back.jpg"
            }
        ]
    },
    {
        orderedDate: 20160402,
        homeDate: "2 April, 2016 *2 Aprile 2016 *２０１６年４月２日",
        date:
            "<span>" +
                "2<br/>Apr" +
            "</span>" +
            "<span>" +
                "2<br/>Apr" +
            "</span>" +
            "<span>" +
                "2日<br/>4月" +
            "</span>",
        title: "つじ村ふみ恵帰国記念ソプラノリサイタル終了 *" +
               "つじ村ふみ恵帰国記念ソプラノリサイタル終了 *" +
               "つじ村ふみ恵帰国記念ソプラノリサイタル終了",
        imgSmall: "img/news/20160129/pamphlet_front_small.jpg",
        imgMedium: "img/news/20160129/pamphlet_front_medium.jpg",
        imgLarge: "img/news/20160129/pamphlet_front_large.jpg",
        intro: "友人からの紹介で、名古屋出身のソプラノ歌手つじ村ふみ惠さんのリサイタルの伴奏を務めさせていただくことになりました。 *" +
                 "Tramite un’amica ho avuto questa occasione di accompagnare il soprano Fumie Tsujimura, di Nagoya, al suo recital. *" +
                 "友人からの紹介で、名古屋出身のソプラノ歌手つじ村ふみ惠さんのリサイタルの伴奏を務めさせていただくことになりました。",
        txt:[
            {
                txt: "友人からの紹介で、名古屋出身のソプラノ歌手つじ村ふみ惠さんのリサイタルの伴奏を務めさせていただくことになりました。メールのやり取りをするうちに、ちょうど同時期に渡伊していたことが分かり、御縁を感じています。名古屋で演奏の機会いただいたのは初めてなのでワクワク。プログラムは、ベッリーニ、ドニゼッティ、ロッシーニ、そしてピアノソロ2曲も含めてイタリア一色です！沢山の方のご来場、お待ちしています。 *" +
                       "Tramite un’amica ho avuto questa occasione di accompagnare il soprano Fumie Tsujimura, di Nagoya, al suo recital. Contattandoci via mail abbiamo scoperto che ci siamo trasferite in Italia lo stesso periodo. È bello conoscere una collega così e non vedo l’ora di suonare a Nagoya visto che è la prima esperienza per me! Il programma sarà composto dalla musica di Bellini, Donizetti e Rossini. Suonerò anche due pezzi per pianoforte, sempre di musica italiana. Spero di vedervi in tanti, venite tutti a Nagoya! *" +
                       "友人からの紹介で、名古屋出身のソプラノ歌手つじ村ふみ惠さんのリサイタルの伴奏を務めさせていただくことになりました。メールのやり取りをするうちに、ちょうど同時期に渡伊していたことが分かり、御縁を感じています。名古屋で演奏の機会いただいたのは初めてなのでワクワク。プログラムは、ベッリーニ、ドニゼッティ、ロッシーニ、そしてピアノソロ2曲も含めてイタリア一色です！沢山の方のご来場、お待ちしています。"
            },
            {
                img:"img/news/20160129/pamphlet_back.jpg"
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