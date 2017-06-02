//TODO better to create a reusable template

var myEvents = [
	{   // concerto duo vagues Cagliari 16/Ott/2015
		year: 2015,
		month: 10,
		day: 16,
        weekDay: 5,
		hour: 20,
		minute: 30,
		latitude: 39.2197195,
		longitude: 9.1157212,
		location: 
            '<div data-translatable>' +
                '<span>' +
                    '<div style="margin-bottom: 10px">' +
                        '<p style="font-size: 17px">' +
                            'Festival “Le Salon de Musique - La Marche dans le désert”</br>' +
                            '<b>Recital of Duo Vagues</b>' +
                        '</p>' +
                        'at Palazzo Siotto, Via dei Genovesi 114, Cagliari</br>' +
                        'organized by Suoni&Pause, Institute Foundation "Giuseppe Siotto"</br>' +
                    '</div>' +
                    'Performers: <i>Andrea Mocci (sax)</i>, <i>Megumi Nakanomori (pf)</i>' +
                '</span>' +
                '<span>' +
                    '<div style="margin-bottom: 10px">' +
                        '<p style="font-size: 17px">' +
                            'Festival “Le Salon de Musique - La Marche dans le désert”</br>' +
                            '<b>Recital di Duo Vagues</b>' +
                        '</p>' +
                        'presso Palazzo Siotto, Via dei Genovesi 114, Cagliari</br>' +
                        'organizzato da Suoni&Pause, Istituto Fondazione "Giuseppe Siotto"</br>' +
                    '</div>' +
                    'Musicisti: <i>Andrea Mocci (sax)</i>, <i>Megumi Nakanomori (pf)</i>' +
                '</span>' +
                '<span>' +
                    '<div style="margin-bottom: 10px">' +
                        '<p style="font-size: 17px">' +
                            'Festival “Le Salon de Musique - La Marche dans le désert”</br>' +
                            '<b>デュオ・ヴァーグ リサイタル</b>' +
                        '</p>' +
                        '会場：Palazzo Siotto, Via dei Genovesi 114, Cagliari</br>' +
                        '主催：Suoni&Pause協会、 Giuseppe Siotto財団</br>' +
                    '</div>' +
                    '出演者：アンドレア・モッチ（サックス）、</br>中ノ森めぐみ（ピアノ）' +
                '</span>' +
            '</div>',
		infoWindow:
            '<div data-translatable>' +
                '<span>' +
                    'Tickets: standard 8€; reduced 6€</br>' +
                    'Info & Reservations: </br> +39 348 0362800' +
                '</span>' +
                '<span>' +
                    'Biglietti: intero 8€; ridotto 6€</br>' +
                    'Info e prenotazioni: 348 0362800' +
                '</span>' +
                '<span>' +
                    'チケット：8€（割引対象者6€）</br>' +
                    '電話：＋39 3480362800' +
                '</span>' +
            '</div>',
		buyTicketURL: 'http://www.cagliari2015.eu/eventi/%E2%80%9Cvagues-duo%E2%80%9D-andrea-mocci-megumi-nakanomori-la-marche-dans-le-d%C3%A9sert-concerto'
	},
    {   // armenia festival Daikanyama 24/Mar/2016
        year: 2016,
        month: 3,
        day: 24,
        weekDay: 4,
        hour: 19,
        minute: '00',
        latitude: 35.648607,
        longitude: 139.700509,
        location:
            '<div data-translatable>' +
                '<span>' +
                    '<div style="margin-bottom: 10px">' +
                        '<p style="font-size: 17px">' +
                            '<b>1st Armenian Music Festival</b>' +
                        '</p>' +
                        'at Hillside Forum (Shibuya, Tokyo)</br>' +
                        'Free entry (Reservation limited to 100 seats)</br>' +
                    '</div>' +
                    'Performers: Special guest <i>Arax Mansourian (sp)</i>, <i>Takahiro Akiba (pf)</i>, <i>Megumi Nakanomori (pf)</i>, <i>Karen Israelyan (vn)</i>, <i>Ririko Takagi (vn)</i>, <i>Futo Yamane (vc)</i>' +
                '</span>' +
                '<span>' +
                    '<div style="margin-bottom: 10px">' +
                        '<p style="font-size: 17px">' +
                            '<b>1° Festival Musicale Armeno</b>' +
                        '</p>' +
                        'presso Hillside Forum (Shibuya, Tokyo)</br>' +
                        'Ingresso gratuito (Prenotazione limitata a 100 posti)</br>' +
                    '</div>' +
                    'Musicisti: Special guest <i>Arax Mansourian (sp)</i>, <i>Takahiro Akiba (pf)</i>, <i>Megumi Nakanomori (pf)</i>, <i>Karen Israelyan (vn)</i>, <i>Ririko Takagi (vn)</i>, <i>Futo Yamane (vc)</i>' +
                '</span>' +
                '<span>' +
                    '<div style="margin-bottom: 10px">' +
                        '<p style="font-size: 17px">' +
                            '<b>第1回アルメニア音楽祭</b>' +
                        '</p>' +
                        '会場：代官山ヒルサイドフォーラム (東京都渋谷区)</br>' +
                        '入場無料（要予約／100席限定／3月初旬より受付開始）</br>' +
                    '</div>' +
                    '出演者：特別ゲスト アラクス・マンスリアン(Sp)、秋場敬浩(pf)、中ノ森めぐみ(pf)、カレン・イスラエリアン(Vn)、高木凛々子(Vn)、山根風仁(Vc)' +
                '</span>' +
            '</div>',
        infoWindow:
            '<div data-translatable>' +
                '<span>' +
                    'For more information, contact the Armenian Embassy</br>' +
                    'Tel.: 03-6277-7453 e-mail: armenianembassy@gol.com' +
                '</span>' +
                '<span>' +
                    'Per maggiori informazioni, contattare l‘Ambasciata Armena</br>' +
                    'Tel.: 03-6277-7453 e-mail: armenianembassy@gol.com' +
                '</span>' +
                '<span>' +
                    'お問合せ・お申込み 駐日アルメニア共和国大使館</br>' +
                    'Tel.: 03-6277-7453 e-mail: armenianembassy@gol.com' +
                '</span>' +
            '</div>',
        buyTicketURL: 'https://www.facebook.com/events/541924802635424/'
    },
    {   // classic night Harajuku 26/Mar/2016
        year: 2016,
        month: 3,
        day: 26,
        weekDay: 6,
        hour: 19,
        minute: 30,
        latitude: 35.666072,
        longitude: 139.705590,
        location:
            '<div data-translatable>' +
                '<span>' +
                    '<div style="margin-bottom: 10px">' +
                        '<p style="font-size: 17px">' +
                            '<b>Classic Night vol.1 Italian and Japanese songs</b>' +
                        '</p>' +
                        'at uzna omom b1 (Shibuya, Tokyo)</br>' +
                        'Tickets: ¥3000 (presale ¥2700)</br>' +
                    '</div>' +
                    'Performers: <i>Mai Nishida (Sop.)</i>, <i>Hitomi Kawai (Mezzo.)</i>, <i>Megumi Nakanomori (Piano)</i>' +
                '</span>' +
                '<span>' +
                    '<div style="margin-bottom: 10px">' +
                        '<p style="font-size: 17px">' +
                            '<b>Classic Night vol.1 Canzoni italo giapponesi</b>' +
                        '</p>' +
                        'presso uzna omom b1 (Shibuya, Tokyo)</br>' +
                        'Biglietti: ¥3000 (prevendita ¥2700)</br>' +
                    '</div>' +
                    'Musicisti: <i>Mai Nishida (Sop.)</i>, <i>Hitomi Kawai (Mezzo.)</i>, <i>Megumi Nakanomori (Piano)</i>' +
                '</span>' +
                '<span>' +
                    '<div style="margin-bottom: 10px">' +
                        '<p style="font-size: 17px">' +
                            '<b>クラシックナイト vol. 1 日本とイタリアの歌曲</b>' +
                        '</p>' +
                        '会場：uzna omom b1 (東京都渋谷区)</br>' +
                        'チケット：当日3,000円  前売り2,700円  1ドリンクオーダー</br>' +
                    '</div>' +
                    '出演者：西田真以（Sop. ）、川合ひとみ（Mezzo. )、中ノ森めぐみ（Piano）' +
                '</span>' +
            '</div>',
        infoWindow: 'Tel.：03-6427-2779</br> email：uznaomomb1@gmail.com',
        buyTicketURL: 'https://www.facebook.com/events/584900771664353/'
    },
    {   // classic night Harajuku 27/Mar/2016
        year: 2016,
        month: 3,
        day: 27,
        weekDay: 7,
        hour: 18,
        minute: 30,
        latitude: 35.666072,
        longitude: 139.705590,
        location:
            '<div data-translatable>' +
                '<span>' +
                    '<div style="margin-bottom: 10px">' +
                        '<p style="font-size: 17px">' +
                            '<b>Classic Night vol.1 Italian and Japanese songs</b>' +
                        '</p>' +
                        'at uzna omom b1 (Shibuya, Tokyo)</br>' +
                        'Tickets: ¥3000 (presale ¥2700)</br>' +
                    '</div>' +
                    'Performers: <i>Mai Nishida (Sop.)</i>, <i>Hitomi Kawai (Mezzo.)</i>, <i>Megumi Nakanomori (Piano)</i>' +
                '</span>' +
                '<span>' +
                    '<div style="margin-bottom: 10px">' +
                        '<p style="font-size: 17px">' +
                            '<b>Classic Night vol.1 Canzoni italo giapponesi</b>' +
                        '</p>' +
                        'presso uzna omom b1 (Shibuya, Tokyo)</br>' +
                        'Biglietti: ¥3000 (prevendita ¥2700)</br>' +
                    '</div>' +
                    'Musicisti: <i>Mai Nishida (Sop.)</i>, <i>Hitomi Kawai (Mezzo.)</i>, <i>Megumi Nakanomori (Piano)</i>' +
                '</span>' +
                '<span>' +
                    '<div style="margin-bottom: 10px">' +
                        '<p style="font-size: 17px">' +
                            '<b>クラシックナイト vol. 1 日本とイタリアの歌曲</b>' +
                        '</p>' +
                        '会場：uzna omom b1 (東京都渋谷区)</br>' +
                        'チケット：当日3,000円  前売り2,700円  1ドリンクオーダー</br>' +
                    '</div>' +
                    '出演者：西田真以（Sop. ）、川合ひとみ（Mezzo. )、中ノ森めぐみ（Piano）' +
                '</span>' +
            '</div>',
        infoWindow: 'Tel.：03-6427-2779</br> email：uznaomomb1@gmail.com',
        buyTicketURL: 'https://www.facebook.com/events/1675691772712422/'
    },
    {   // concerto soprano Nagoya 1/Apr/2016
        year: 2016,
        month: 4,
        day: 1,
        weekDay: 5,
        hour: 19,
        minute: '00',
        latitude: 35.167992,
        longitude: 136.899158,
        location:
            '<div data-translatable>' +
                '<span>' +
                    '<div style="margin-bottom: 10px">' +
                        '<p style="font-size: 17px">' +
                            '<b>Soprano Recital</b>' +
                        '</p>' +
                        'at Denki Bunka Kaikan (Nagoya)</br>' +
                        'La serata musicale del belcanto</br>' +
                        'Tickets: ¥3,500</br>' +
                    '</div>' +
                    'Performers: <i>Fumie Tsujimura (soprano)</i>, <i>Megumi Nakanomori (pf)</i>' +
                '</span>' +
                '<span>' +
                    '<div style="margin-bottom: 10px">' +
                        '<p style="font-size: 17px">' +
                            '<b>Soprano Recital</b>' +
                        '</p>' +
                        'presso Denki Bunka Kaikan (Nagoya)</br>' +
                        'La serata musicale del belcanto</br>' +
                        'Biglietti: ¥3,500</br>' +
                    '</div>' +
                    'Musicisti: <i>Fumie Tsujimura (soprano)</i>, <i>Megumi Nakanomori (pf)</i>' +
                '</span>' +
                '<span>' +
                    '<div style="margin-bottom: 10px">' +
                        '<p style="font-size: 17px">' +
                            '<b>ソプラノリサイタル</b>' +
                        '</p>' +
                        '会場：電気文化会館 (愛知県名古屋市)</br>' +
                        'ベルカントによる夜の音楽会</br>' +
                        '全席自由：3,500円</br>' +
                    '</div>' +
                    '出演者：辻村文恵（ソプラノ）、中ノ森めぐみ（ピアノ）' +
                '</span>' +
            '</div>',
        infoWindow:
            '<div data-translatable>' +
                '<span>' +
                    'info: (052)733-8809' +
                '</span>' +
                '<span>' +
                    'info: (052)733-8809' +
                '</span>' +
                '<span>' +
                    '問い合わせ：OFFICEリラン(052)733-8809' +
                '</span>' +
            '</div>',
        buyTicketURL: '#events'
    },
    {   // concerto solo Rastignano 21/Mag/2016
        year: 2016,
        month: 5,
        day: 21,
        weekDay: 6,
        hour: 21,
        minute: 15,
        latitude: 44.441253,
        longitude: 11.361864,
        location:
        '<div data-translatable>' +
            '<span>' +
                '<div style="margin-bottom: 10px">' +
                    '<p style="font-size: 17px">' +
                        '<b>Piano Recital</b>' +
                    '</p>' +
                    'at Andrea & Rossano Baldi hall, Rastignano, Bologna</br>' +
                '</div>' +
                'Cimarosa: Tre sonate, ' +
                'Beethoven: Sonata op. 81 "Les adieux", ' +
                'Chopin: Barcarola op. 60 / Andante spianato e grande polacca brillante op. 22, ' +
                'Respighi: Sei pezzi' +
            '</span>' +
            '<span>' +
                '<div style="margin-bottom: 10px">' +
                    '<p style="font-size: 17px">' +
                        '<b>Recital di Pianoforte</b>' +
                    '</p>' +
                    'presso Sala Andrea e Rossano Baldi, Rastignano, Bologna</br>' +
                '</div>' +
                'Cimarosa: Tre sonate, ' +
                'Beethoven: Sonata op. 81 "Les adieux", ' +
                'Chopin: Barcarola op. 60 / Andante spianato e grande polacca brillante op. 22, ' +
                'Respighi: Sei pezzi' +
            '</span>' +
            '<span>' +
                '<div style="margin-bottom: 10px">' +
                    '<p style="font-size: 17px">' +
                        '<b>ピアノ リサイタル</b>' +
                    '</p>' +
                    '会場：バルディ・ホール（ボローニャ）</br>' +
                '</div>' +
                'Cimarosa: Tre sonate, ' +
                'Beethoven: Sonata op. 81 "Les adieux", ' +
                'Chopin: Barcarola op. 60 / Andante spianato e grande polacca brillante op. 22, ' +
                'Respighi: Sei pezzi' +
            '</span>' +
        '</div>',
        infoWindow:
        '<div data-translatable>' +
            '<span>' +
                'Tickets: 10€</br>' +
                'organized by Circolo della Musica di Bologna</br>' +
                'info: circolodellamusica@alice.it' +
            '</span>' +
            '<span>' +
                'Biglietti: 10€</br>' +
                'organizzato da Circolo della Musica di Bologna</br>' +
                'info: circolodellamusica@alice.it' +
            '</span>' +
            '<span>' +
                '全席自由：１０ユーロ</br>' +
                '主催：Circolo della Musica di Bologna</br>' +
                '問い合わせ：circolodellamusica@alice.it' +
            '</span>' +
        '</div>',
        buyTicketURL: '#events'
    },
    {   // concerto solo Bologna 22/Mag/2016
        year: 2016,
        month: 5,
        day: 22,
        weekDay: 7,
        hour: 16,
        minute: 30,
        latitude: 44.495477,
        longitude: 11.328567,
        location:
        '<div data-translatable>' +
            '<span>' +
                '<div style="margin-bottom: 10px">' +
                    '<p style="font-size: 17px">' +
                        '<b>Piano Recital</b>' +
                    '</p>' +
                    'at Oratorio San Rocco, Bologna</br>' +
                '</div>' +
                'Cimarosa: Tre sonate, ' +
                'Beethoven: Sonata op. 81 "Les adieux", ' +
                'Chopin: Barcarola op. 60 / Andante spianato e grande polacca brillante op. 22, ' +
                'Respighi: Sei pezzi' +
            '</span>' +
            '<span>' +
                '<div style="margin-bottom: 10px">' +
                    '<p style="font-size: 17px">' +
                        '<b>Recital di Pianoforte</b>' +
                    '</p>' +
                    'presso Oratorio San Rocco, Bologna</br>' +
                '</div>' +
                'Cimarosa: Tre sonate, ' +
                'Beethoven: Sonata op. 81 "Les adieux", ' +
                'Chopin: Barcarola op. 60 / Andante spianato e grande polacca brillante op. 22, ' +
                'Respighi: Sei pezzi' +
            '</span>' +
            '<span>' +
                '<div style="margin-bottom: 10px">' +
                    '<p style="font-size: 17px">' +
                        '<b>ピアノ リサイタル</b>' +
                    '</p>' +
                    '会場：オラトリオ・サン・ロッコ（ボローニャ）</br>' +
                '</div>' +
                'Cimarosa: Tre sonate, ' +
                'Beethoven: Sonata op. 81 "Les adieux", ' +
                'Chopin: Barcarola op. 60 / Andante spianato e grande polacca brillante op. 22, ' +
                'Respighi: Sei pezzi' +
            '</span>' +
        '</div>',
        infoWindow:
        '<div data-translatable>' +
            '<span>' +
                'Only for association members' +
            '</span>' +
            '<span>' +
                'Riservato ai soci' +
            '</span>' +
            '<span>' +
                '会員限定' +
            '</span>' +
        '</div>',
        buyTicketURL: '#events'
    },
    {   // concerto solo Milano 27/Mag/2016
        year: 2016,
        month: 5,
        day: 27,
        weekDay: 5,
        hour: 17,
        minute: 00,
        latitude: 45.460096,
        longitude: 9.089992,
        location:
        '<div data-translatable>' +
            '<span>' +
                '<div style="margin-bottom: 10px">' +
                    '<p style="font-size: 17px">' +
                        '<b>Piano Recital</b>' +
                    '</p>' +
                    'at Spazio Coop Antonio Bertolini, Baggio, Milano' +
                '</div>' +
                'Cimarosa: Tre sonate, ' +
                'Beethoven: Sonata op. 81 "Les adieux", ' +
                'Chopin: Barcarola op. 60 / Andante spianato e grande polacca brillante op. 22, ' +
                'Respighi: Sei pezzi' +
            '</span>' +
            '<span>' +
                '<div style="margin-bottom: 10px">' +
                    '<p style="font-size: 17px">' +
                        '<b>Recital di Pianoforte</b>' +
                    '</p>' +
                    'presso Spazio Coop Antonio Bertolini, Baggio, Milano' +
                '</div>' +
                'Cimarosa: Tre sonate, ' +
                'Beethoven: Sonata op. 81 "Les adieux", ' +
                'Chopin: Barcarola op. 60 / Andante spianato e grande polacca brillante op. 22, ' +
                'Respighi: Sei pezzi' +
            '</span>' +
            '<span>' +
                '<div style="margin-bottom: 10px">' +
                    '<p style="font-size: 17px">' +
                        '<b>ピアノ リサイタル</b>' +
                    '</p>' +
                    '会場：コープ・アントーニオ・ベルトリーニホール（ミラノ）' +
                '</div>' +
                'Cimarosa: Tre sonate, ' +
                'Beethoven: Sonata op. 81 "Les adieux", ' +
                'Chopin: Barcarola op. 60 / Andante spianato e grande polacca brillante op. 22, ' +
                'Respighi: Sei pezzi' +
            '</span>' +
        '</div>',
        infoWindow: 'Via Gianella 21, Baggio',
        buyTicketURL: '#events'
    },
    {   // concerto opera Roppongi 29/Mag/2016
        year: 2016,
        month: 5,
        day: 29,
        weekDay: 7,
        hour: 13,
        minute: 25,
        latitude: 35.6586001,
        longitude: 139.7322178,
        location:
            '<div data-translatable>' +
                '<span>' +
                    '<div style="margin-bottom: 10px">' +
                        '<p style="font-size: 17px">' +
                            '<b>150° Anniversary of relationship between Italy and Japan<br/>' +
                            '"Italia, amore mio!"</b>' +
                        '</p>' +
                        'Arie, duet</br>' +
                    '</div>' +
                    'Performers: <i>Opera Vera</i> (<i>Mai Nishida (Sop.)</i>, <i>Paolo Andrea Di Pietro (Bs.)</i>), <i>Megumi Nakanomori (Pf)</i>' +
                '</span>' +
                '<span>' +
                    '<div style="margin-bottom: 10px">' +
                        '<p style="font-size: 17px">' +
                            '<b>150° Anniversario delle relazioni tra Italia e Giappone<br/>' +
                            '"Italia, amore mio!"</b>' +
                        '</p>' +
                        'Arie, duetti</br>' +
                    '</div>' +
                    'Musicisti: <i>Opera Vera</i> (<i>Mai Nishida (Sop.)</i>, <i>Paolo Andrea Di Pietro (Bs.)</i>), <i>Megumi Nakanomori (Pf)</i>' +
                '</span>' +
                '<span>' +
                    '<div style="margin-bottom: 10px">' +
                        '<p style="font-size: 17px">' +
                            '<b>日伊国交150周年記念イベント<br/>' +
                            '"Italia, amore mio!"</b>' +
                        '</p>' +
                        'アリア、二重唱</br>' +
                    '</div>' +
                    '出演者：オペラヴェーラ(西田真以 sp, パオロアンドレア・ディピエトロ bs)、中ノ森めぐみ（pf）' +
                '</span>' +
            '</div>',
        infoWindow:
            '<div data-translatable>' +
                '<span>' +
                    'Roppongi Hills Arena 1F Piazza Italia' +
                '</span>' +
                '<span>' +
                    'Roppongi Hills Arena 1F Piazza Italia' +
                '</span>' +
                '<span>' +
                    '六本木ヒルズ アリーナ 1F Piazza Italia' +
                '</span>' +
            '</div>',
        buyTicketURL: 'https://italia-amore-mio.com/program/'
    },
    {   // concerto opera Meguro 25/Giu/2016
        year: 2016,
        month: 6,
        day: 25,
        weekDay: 6,
        hour: 19,
        minute: 15,
        latitude: 35.621851,
        longitude: 139.673356,
        location:
            '<div data-translatable>' +
                '<span>' +
                    '<div style="margin-bottom: 10px">' +
                        '<p style="font-size: 17px">' +
                            '<b>Italia Opera Concert</b>' +
                        '</p>' +
                        'at Meguro Persimmon Hall (Tokyo)</br>' +
                    '</div>' +
                    'Performers: <i>Opera Vera</i> (<i>Mai Nishida (Sop.)</i>, <i>Paolo Andrea Di Pietro (Bs.)</i>), <i>Megumi Nakanomori (Pf)</i></br>' +
                    'Arias and duets from italian opera, piano solo' +
                '</span>' +
                '<span>' +
                    '<div style="margin-bottom: 10px">' +
                        '<p style="font-size: 17px">' +
                            '<b>Italia Opera Concert</b>' +
                        '</p>' +
                        'presso Meguro Persimmon Hall (Tokyo)</br>' +
                    '</div>' +
                    'Musicisti: <i>Opera Vera</i> (<i>Mai Nishida (Sop.)</i>, <i>Paolo Andrea Di Pietro (Bs.)</i>), <i>Megumi Nakanomori (Pf)</i></br>' +
                    'Arie e duetti dalle opere italiane, piano solo' +
                '</span>' +
                '<span>' +
                    '<div style="margin-bottom: 10px">' +
                        '<p style="font-size: 17px">' +
                            '<b>イタリアオペラコンサート</b>' +
                        '</p>' +
                        '会場：めぐろパーシモン小ホール（東京都目黒区）</br>' +
                    '</div>' +
                    '出演者：オペラヴェーラ(西田真以 sp, パオロアンドレア・ディピエトロ bs)、中ノ森めぐみ（pf）</br>' +
                    'イタリアオペラのアリアとデュエット、ピアノソロ' +
                '</span>' +
            '</div>',
        infoWindow:
            '<div data-translatable>' +
                '<span>' +
                    'Tickets: ¥2,980　(reduced ¥1,980)</br>' +
                    'organized by OperaVera</br>' +
                    'email: operavera.info@gmail.com' +
                '</span>' +
                '<span>' +
                    'Biglietti: ¥2,980　(ridotto ¥1,980)</br>' +
                    'organizzato da OperaVera</br>' +
                    'email: operavera.info@gmail.com' +
                '</span>' +
                '<span>' +
                    '全席自由：2,980円（高校生以下1,980円）</br>' +
                    '主催：オペラヴェーラ</br>' +
                    'email：operavera.info@gmail.com' +
                '</span>' +
            '</div>',
        buyTicketURL: 'https://www.facebook.com/operavera'
    },
    {   // classic night Harajuku 7/Lug/2016
        year: 2016,
        month: 7,
        day: 7,
        weekDay: 4,
        hour: 19,
        minute: 30,
        latitude: 35.666072,
        longitude: 139.705590,
        location:
            '<div data-translatable>' +
                '<span>' +
                    '<div style="margin-bottom: 10px">' +
                        '<p style="font-size: 17px">' +
                            '<b>Classic Night vol.2 Brahms, Schumann, Berg</b>' +
                        '</p>' +
                        'at uzna omom b1 (Shibuya, Tokyo)</br>' +
                        'Tickets: ¥3000 (presale ¥2700)</br>' +
                    '</div>' +
                    'Performers: <i>Keiko Murata (Vla.)</i>, <i>Hitomi Kawai (Mezzo.)</i>, <i>Megumi Nakanomori (Piano)</i>' +
                '</span>' +
                '<span>' +
                    '<div style="margin-bottom: 10px">' +
                        '<p style="font-size: 17px">' +
                            '<b>Classic Night vol.2 Brahms, Schumann, Berg</b>' +
                        '</p>' +
                        'presso uzna omom b1 (Shibuya, Tokyo)</br>' +
                        'Biglietti: ¥3000 (prevendita ¥2700)</br>' +
                    '</div>' +
                    'Musicisti: <i>Keiko Murata (Vla.)</i>, <i>Hitomi Kawai (Mezzo.)</i>, <i>Megumi Nakanomori (Piano)</i>' +
                '</span>' +
                '<span>' +
                    '<div style="margin-bottom: 10px">' +
                        '<p style="font-size: 17px">' +
                            '<b>クラシックナイト vol. 2 Brahms, Schumann, Berg</b>' +
                        '</p>' +
                        '会場：uzna omom b1 (東京都渋谷区)</br>' +
                        'チケット：当日3,000円  前売り2,700円  1ドリンクオーダー</br>' +
                    '</div>' +
                    '出演者：村田恵子（Vla.）、川合ひとみ（Mezzo. )、中ノ森めぐみ（Piano）' +
                '</span>' +
            '</div>',
        infoWindow: 'Tel.：03-6427-2779</br> email：uznaomomb1@gmail.com',
        buyTicketURL: 'https://www.facebook.com/events/1543800662595353/'
    },
    {   // classic night Harajuku 9/Lug/2016
        year: 2016,
        month: 7,
        day: 9,
        weekDay: 4,
        hour: 19,
        minute: 30,
        latitude: 35.666072,
        longitude: 139.705590,
        location:
            '<div data-translatable>' +
                '<span>' +
                    '<div style="margin-bottom: 10px">' +
                        '<p style="font-size: 17px">' +
                            '<b>Classic Night vol.2 Brahms, Schumann, Berg</b>' +
                        '</p>' +
                        'at uzna omom b1 (Shibuya, Tokyo)</br>' +
                        'Tickets: ¥3000 (presale ¥2700)</br>' +
                    '</div>' +
                    'Performers: <i>Keiko Murata (Vla.)</i>, <i>Hitomi Kawai (Mezzo.)</i>, <i>Megumi Nakanomori (Piano)</i>' +
                '</span>' +
                '<span>' +
                    '<div style="margin-bottom: 10px">' +
                        '<p style="font-size: 17px">' +
                            '<b>Classic Night vol.2 Brahms, Schumann, Berg</b>' +
                        '</p>' +
                        'presso uzna omom b1 (Shibuya, Tokyo)</br>' +
                        'Biglietti: ¥3000 (prevendita ¥2700)</br>' +
                    '</div>' +
                    'Musicisti: <i>Keiko Murata (Vla.)</i>, <i>Hitomi Kawai (Mezzo.)</i>, <i>Megumi Nakanomori (Piano)</i>' +
                '</span>' +
                '<span>' +
                    '<div style="margin-bottom: 10px">' +
                        '<p style="font-size: 17px">' +
                            '<b>クラシックナイト vol. 2 Brahms, Schumann, Berg</b>' +
                        '</p>' +
                        '会場：uzna omom b1 (東京都渋谷区)</br>' +
                        'チケット：当日3,000円  前売り2,700円  1ドリンクオーダー</br>' +
                    '</div>' +
                    '出演者：村田恵子（Vla.）、川合ひとみ（Mezzo. )、中ノ森めぐみ（Piano）' +
                '</span>' +
            '</div>',
        infoWindow: 'Tel.：03-6427-2779</br> email：uznaomomb1@gmail.com',
        buyTicketURL: 'https://www.facebook.com/events/1691879757730414/'
    },
    {   // concerto duo Tottori 31/Lug/2016
        year: 2016,
        month: 7,
        day: 31,
        weekDay: 7,
        hour: 14,
        minute: '00',
        latitude: 35.500552,
        longitude: 134.235833,
        location:
            '<div data-translatable>' +
                '<span>' +
                    '<div style="margin-bottom: 10px">' +
                        '<p style="font-size: 17px">' +
                            '<b>Soprano and Bariton duo Recital</b>' +
                        '</p>' +
                        'at Tottori Shimin Kaikan (Tottori)</br>' +
                        'lied, operetta, piano solo</br>' +
                    '</div>' +
                    'Performers: <i>Taniguchi Ani (soprano)</i>, <i>Taniguchi Shin (baritono)</i>, <i>Izumi Yuasa (violin)</i>, <i>Megumi Nakanomori (pf)</i>' +
                '</span>' +
                '<span>' +
                    '<div style="margin-bottom: 10px">' +
                        '<p style="font-size: 17px">' +
                            '<b>Soprano e Baritono duo Recital</b>' +
                        '</p>' +
                        'presso Tottori Shimin Kaikan (Tottori)</br>' +
                        'lied, operetta, piano solo</br>' +
                    '</div>' +
                    'Musicisti: <i>Taniguchi Ani (soprano)</i>, <i>Taniguchi Shin (baritono)</i>, <i>Izumi Yuasa (violin)</i>, <i>Megumi Nakanomori (pf)</i>' +
                '</span>' +
                '<span>' +
                    '<div style="margin-bottom: 10px">' +
                        '<p style="font-size: 17px">' +
                            '<b>谷口アニー・伸　デュオコンサート</b>' +
                        '</p>' +
                        '会場：鳥取市民会館 (鳥取県鳥取市)</br>' +
                        'ドイツ歌曲、オペレッタ、ピアノソロ</br>' +
                    '</div>' +
                    '出演者：谷口アニー（ソプラノ）、谷口伸（バリトン）、湯淺いづみ（ヴァイオリン）、中ノ森めぐみ（ピアノ）' +
                '</span>' +
            '</div>',
        infoWindow:
            '<div data-translatable>' +
                '<span>' +
                    'details to be defined' +
                '</span>' +
                '<span>' +
                    'dettagli da definire' +
                '</span>' +
                '<span>' +
                    '詳細未定' +
                '</span>' +
            '</div>',
        buyTicketURL: '#events'
    },
    {   // salon concert 27/Ago/2016
        year: 2016,
        month: 8,
        day: 27,
        weekDay: 6,
        hour: 14,
        minute: '00',
        latitude: 35.642383,
        longitude: 139.748233,
        location:
            '<div data-translatable>' +
                '<span>' +
                    '<div style="margin-bottom: 10px">' +
                        '<p style="font-size: 17px">' +
                            '<b>Salon Concert</b>' +
                        '</p>' +
                        'at Minato Platinum music hall</br>' +
                        'Sonatine (Sancan), Barcarolle (Chopin) etc.</br>' +
                    '</div>' +
                    'Performers: <i>Yoshimi Nanaumi (Fl)</i>, <i>Megumi Nakanomori (pf)</i>' +
                '</span>' +
                '<span>' +
                    '<div style="margin-bottom: 10px">' +
                        '<p style="font-size: 17px">' +
                            '<b>Salon Concert</b>' +
                        '</p>' +
                        'presso Minato Platinum music hall</br>' +
                        'Sonatine (Sancan), Barcarolle (Chopin) etc.</br>' +
                    '</div>' +
                    'Musicisti: <i>Yoshimi Nanaumi (Fl)</i>, <i>Megumi Nakanomori (pf)</i>' +
                '</span>' +
                '<span>' +
                    '<div style="margin-bottom: 10px">' +
                        '<p style="font-size: 17px">' +
                            '<b>昼下がりサロンコンサート</b>' +
                        '</p>' +
                        '会場：港プラチナム音楽ホール（東京都港区）</br>' +
                        'ソナチネ（サンカン）、舟歌（ショパン）、他</br>' +
                    '</div>' +
                    '出演者：七海良美（フルート）、中ノ森めぐみ（ピアノ）' +
                '</span>' +
            '</div>',
        infoWindow:
            '<div data-translatable>' +
                '<span>' +
                    'Tickets: 3,500yen (presale 3,000yen)</br>' +
                    'organized by Minato music office' +
                '</span>' +
                '<span>' +
                    'Biglietti: 3,500yen (prevendita 3,000yen)</br>' +
                    'organizzato da Minato music office' +
                '</span>' +
                '<span>' +
                    'チケット：当日3,500円（前売り3,000円）</br>' +
                    '主催：港音楽事務所' +
                '</span>' +
            '</div>',
        buyTicketURL: '#events'
    },
    {   // lunch time concert 13/Set/2016
        year: 2016,
        month: 9,
        day: 13,
        weekDay: 2,
        hour: 12,
        minute: '05',
        latitude: 35.691540,
        longitude: 139.694260,
        location:
            '<div data-translatable>' +
                '<span>' +
                    '<div style="margin-bottom: 10px">' +
                        '<p style="font-size: 17px">' +
                            '<b>Shinjuku Matsui Building Lunch Time Concert</b>' +
                        '</p>' +
                        'at Shinjuku Mitsui Building (Tokyo)</br>' +
                        'vol. 423 Japanese and italian songs, Mozart\'s opera</br>' +
                    '</div>' +
                    'Performers: <i>Mai Nishida (Sop.)</i>, <i>Paolo Andrea Di Pietro (Bs.)</i>, <i>Megumi Nakanomori (pf)</i>' +
                '</span>' +
                '<span>' +
                    '<div style="margin-bottom: 10px">' +
                        '<p style="font-size: 17px">' +
                            '<b>Shinjuku Matsui Building Lunch Time Concert</b>' +
                        '</p>' +
                        'presso Shinjuku Mitsui Building (Tokyo)</br>' +
                        'vol. 423 Canzoni giapponesi e italiane, opera di Mozart</br>' +
                    '</div>' +
                    'Musicisti: <i>Mai Nishida (Sop.)</i>, <i>Paolo Andrea Di Pietro (Bs.)</i>, <i>Megumi Nakanomori (pf)</i>' +
                '</span>' +
                '<span>' +
                    '<div style="margin-bottom: 10px">' +
                        '<p style="font-size: 17px">' +
                            '<b>新宿三井ビルディング・ランチタイムコンサート</b>' +
                        '</p>' +
                        '会場：新宿三井ビルディング　ＬＢ階エントランス（東京都新宿区）</br>' +
                        '第423回日伊歌曲とモーツァルトの愉快なオペラ</br>' +
                    '</div>' +
                    '出演者：西田 真以（ソプラノ）、パオロアンドレア・ディピエトロ（バス）、中ノ森 めぐみ（ピアノ）' +
                '</span>' +
            '</div>',
        infoWindow:
            '<div data-translatable>' +
                '<span>' +
                    'free entrance</br>' +
                    'organized by Mitsui fudosan' +
                '</span>' +
                '<span>' +
                    'ingresso libero</br>' +
                    'organizzato da Mitsui fudosan' +
                '</span>' +
                '<span>' +
                    '観覧無料</br>' +
                    '主催：三井不動産' +
                '</span>' +
            '</div>',
        buyTicketURL: '#events'
    },
    {   // fiera italiana 3/Nov/2016
        year: 2016,
        month: 11,
        day: 3,
        weekDay: 4,
        hour: 16,
        minute: '00',
        latitude: 35.672328,
        longitude: 139.758912,
        location:
            '<div data-translatable>' +
                '<span>' +
                    '<div style="margin-bottom: 10px">' +
                        '<p style="font-size: 17px">' +
                            '<b>日伊国交１５０周年記念イタリアフェア</b>' +
                        '</p>' +
                        'at Imperial Hotel (Tokyo)</br>' +
                        'Arias from italian operas, piano solo</br>' +
                    '</div>' +
                    'Performers: <i>Hiroko Nohara (Soprano)</i>, <i>Megumi Nakanomori (Piano)</i>' +
                '</span>' +
                '<span>' +
                    '<div style="margin-bottom: 10px">' +
                        '<p style="font-size: 17px">' +
                            '<b>日伊国交１５０周年記念イタリアフェア</b>' +
                        '</p>' +
                        'presso Imperial Hotel (Tokyo)</br>' +
                        'Arie dalle opere italiane, piano solo</br>' +
                    '</div>' +
                    'Musicisti: <i>Hiroko Nohara (Soprano)</i>, <i>Megumi Nakanomori (Piano)</i>' +
                '</span>' +
                '<span>' +
                    '<div style="margin-bottom: 10px">' +
                        '<p style="font-size: 17px">' +
                            '<b>日伊国交１５０周年記念イタリアフェア</b>' +
                        '</p>' +
                        '会場：帝国ホテル　エントランス（東京都千代田区）</br>' +
                        'イタリアオペラのアリア、ピアノソロ</br>' +
                    '</div>' +
                    '出演者：野原広子（ソプラノ）、中ノ森めぐみ（ピアノ）' +
                '</span>' +
            '</div>',
        infoWindow:
            '<div data-translatable>' +
                '<span>' +
                    'details to be defined' +
                '</span>' +
                '<span>' +
                    'dettagli da definire' +
                '</span>' +
                '<span>' +
                    '詳細未定' +
                '</span>' +
            '</div>',
        buyTicketURL: '#events'
    },
    {   // concerto duo con violino 26/Mar/2017
        year: 2017,
        month: 3,
        day: 26,
        weekDay: 7,
        hour: 14,
        minute: '00',
        latitude: 37.411410,
        longitude: 140.390545,
        location:
            '<div data-translatable>' +
                '<span>' +
                    '<div style="margin-bottom: 10px">' +
                        '<p style="font-size: 17px">' +
                            '<b>Duo Concert</b>' +
                        '</p>' +
                        'at Amidaji Temple (Fukushima)' +
                    '</div>' +
                    'Performers: <i>Natsuko Hosokawa (Violin)</i>, <i>Megumi Nakanomori (Piano)</i></br>' +
                    'Organized by Classic Live for 1,000,000 people' +
                '</span>' +
                '<span>' +
                    '<div style="margin-bottom: 10px">' +
                        '<p style="font-size: 17px">' +
                            '<b>Concerto Duo</b>' +
                        '</p>' +
                        'presso Tempio Amidaji (Fukushima)' +
                    '</div>' +
                    'Musicisti: <i>Natsuko Hosokawa (Violino)</i>, <i>Megumi Nakanomori (Piano)</i></br>' +
                    'Organizzato da Classic Live for 1,000,000 people' +
                '</span>' +
                '<span>' +
                    '<div style="margin-bottom: 10px">' +
                        '<p style="font-size: 17px">' +
                            '<b>デュオコンサート</b>' +
                        '</p>' +
                        '会場：阿弥陀寺（福島県）' +
                    '</div>' +
                    '出演者：細川奈津子（ヴァイオリン）中ノ森めぐみ（ピアノ）</br>' +
                    '主催：100万人のクラシックライブ' +
                '</span>' +
            '</div>',
        infoWindow:
            '<div data-translatable>' +
                '<span>' +
                    'Tickets: 1,000 yen' +
                '</span>' +
                '<span>' +
                    'Biglietti: 1,000 yen' +
                '</span>' +
                '<span>' +
                    'チケット：1,000円' +
                '</span>' +
            '</div>',
        buyTicketURL: 'http://1m-cl.com/'
    },
    {   // concerto Amore 1/Apr/2017
        year: 2017,
        month: 4,
        day: 1,
        weekDay: 6,
        hour: 18,
        minute: 30,
        latitude: 31.577624,
        longitude: 130.549265,
        location:
            '<div data-translatable>' +
                '<span>' +
                    '<div style="margin-bottom: 10px">' +
                        '<p style="font-size: 17px">' +
                            '<b>Tenor&Bass Duo Concert ”AMORE!”</b>' +
                        '</p>' +
                        'at Sun Ere Kagoshima (Kagoshima)</br>' +
                        'Italian and japanese songs, italian operas</br>' +
                    '</div>' +
                    'Performers: <i>Tsukasa Ide (Ten.)</i>, <i>Masashi Tomosugi (Bs.)</i>, <i>Megumi Nakanomori (Piano)</i>' +
                '</span>' +
                '<span>' +
                    '<div style="margin-bottom: 10px">' +
                        '<p style="font-size: 17px">' +
                            '<b>Tenore & Basso Duo Concerto ”AMORE!”</b>' +
                        '</p>' +
                        'presso Sun Ere Kagoshima (Kagoshima)</br>' +
                        'Canzoni italiane e giapponesi, opere italiane</br>' +
                    '</div>' +
                    'Musicisti: <i>Tsukasa Ide (Ten.)</i>, <i>Masashi Tomosugi (Bs.)</i>, <i>Megumi Nakanomori (Piano)</i>' +
                '</span>' +
                '<span>' +
                    '<div style="margin-bottom: 10px">' +
                        '<p style="font-size: 17px">' +
                            '<b>テノール・バス デュオコンサート”AMORE!”</b>' +
                        '</p>' +
                        '会場：サンエールかごしま（鹿児島県）</br>' +
                        'イタリア歌曲、日本歌曲、イタリアオペラからアリア、デュエットなど</br>' +
                    '</div>' +
                    '出演者：井出司（テノール）友杉誠志（バス）中ノ森めぐみ（ピアノ）' +
                '</span>' +
            '</div>',
        infoWindow:
            '<div data-translatable>' +
                '<span>' +
                    'Tickets: 2,500 yen (presale 2,000 yen), students 1,000 yen, kids under 3 years old free entrance</br>' +
                    'Info: traumerei2017@yahoo.co.jp' +
                '</span>' +
                '<span>' +
                    'Biglietti: 2,500 yen (prevendita 2,000 yen), studenti 1,000 yen, fino a 3 anni gratis</br>' +
                    'Info: traumerei2017@yahoo.co.jp' +
                '</span>' +
                '<span>' +
                    'チケット：当日2,500円（前売り2,000円）学生券1,000円 未就学児無料</br>' +
                    'お問い合わせ：traumerei2017@yahoo.co.jp</br>' +
                    'チケット取扱店：十字屋クロス 09-9239-8585' +
                '</span>' +
            '</div>',
        buyTicketURL: '#events'
    },
    {   // concerto Amore 9/Apr/2017
        year: 2017,
        month: 4,
        day: 9,
        weekDay: 7,
        hour: 18,
        minute: 30,
        latitude: 36.276200,
        longitude: 138.461742,
        location:
            '<div data-translatable>' +
                '<span>' +
                    '<div style="margin-bottom: 10px">' +
                        '<p style="font-size: 17px">' +
                            '<b>Tenor&Bass Duo Concert ”AMORE!”</b>' +
                        '</p>' +
                        'at Sakudaira Koryu Center (Nagano)</br>' +
                        'Italian and japanese songs, italian operas</br>' +
                    '</div>' +
                    'Performers: <i>Tsukasa Ide (Ten.)</i>, <i>Masashi Tomosugi (Bs.)</i>, <i>Megumi Nakanomori (Piano)</i>' +
                '</span>' +
                '<span>' +
                    '<div style="margin-bottom: 10px">' +
                        '<p style="font-size: 17px">' +
                            '<b>Tenore & Basso Duo Concerto ”AMORE!”</b>' +
                        '</p>' +
                        'presso Sakudaira Koryu Center (Nagano)</br>' +
                        'Canzoni italiane e giapponesi, opere italiane</br>' +
                    '</div>' +
                    'Musicisti: <i>Tsukasa Ide (Ten.)</i>, <i>Masashi Tomosugi (Bs.)</i>, <i>Megumi Nakanomori (Piano)</i>' +
                '</span>' +
                '<span>' +
                    '<div style="margin-bottom: 10px">' +
                        '<p style="font-size: 17px">' +
                            '<b>テノール・バス デュオコンサート”AMORE!”</b>' +
                        '</p>' +
                        '会場：佐久平交流センター（長野県）</br>' +
                        'イタリア歌曲、日本歌曲、イタリアオペラからアリア、デュエットなど</br>' +
                    '</div>' +
                    '出演者：井出司（テノール）友杉誠志（バス）中ノ森めぐみ（ピアノ）' +
                '</span>' +
            '</div>',
        infoWindow:
            '<div data-translatable>' +
                '<span>' +
                    'Tickets: 2,500 yen (presale 2,000 yen), students 1,000 yen, kids under 3 years old free entrance</br>' +
                    'Info: traumerei2017@yahoo.co.jp' +
                '</span>' +
                '<span>' +
                    'Biglietti: 2,500 yen (prevendita 2,000 yen), studenti 1,000 yen, fino a 3 anni gratis</br>' +
                    'Info: traumerei2017@yahoo.co.jp' +
                '</span>' +
                '<span>' +
                    'チケット：当日2,500円（前売り2,000円）学生券1,000円 未就学児無料</br>' +
                    'お問い合わせ：traumerei2017@yahoo.co.jp</br>' +
                    'チケット取扱店：ヒオキ楽器 02-6768-7704, 池田楽器 02-6762-0046 ' +
                '</span>' +
            '</div>',
        buyTicketURL: '#events'
    },
    {   // concerto Amore 12/Apr/2017
        year: 2017,
        month: 4,
        day: 12,
        weekDay: 3,
        hour: 18,
        minute: 30,
        latitude: 35.600795,
        longitude: 139.507830,
        location:
            '<div data-translatable>' +
                '<span>' +
                    '<div style="margin-bottom: 10px">' +
                        '<p style="font-size: 17px">' +
                            '<b>Tenor&Bass Duo Concert ”AMORE!”</b>' +
                        '</p>' +
                        'at Yuri Hall of Showa University of Music (Kanagawa)</br>' +
                        'Italian and japanese songs, italian operas</br>' +
                    '</div>' +
                    'Performers: <i>Tsukasa Ide (Ten.)</i>, <i>Masashi Tomosugi (Bs.)</i>, <i>Megumi Nakanomori (Piano)</i>' +
                '</span>' +
                '<span>' +
                    '<div style="margin-bottom: 10px">' +
                        '<p style="font-size: 17px">' +
                            '<b>Tenore & Basso Duo Concerto ”AMORE!”</b>' +
                        '</p>' +
                        'presso Teatro Giglio dell\'Università di Musica Showa (Kanagawa)</br>' +
                        'Canzoni italiane e giapponesi, opere italiane</br>' +
                    '</div>' +
                    'Musicisti: <i>Tsukasa Ide (Ten.)</i>, <i>Masashi Tomosugi (Bs.)</i>, <i>Megumi Nakanomori (Piano)</i>' +
                '</span>' +
                '<span>' +
                    '<div style="margin-bottom: 10px">' +
                        '<p style="font-size: 17px">' +
                            '<b>テノール・バス デュオコンサート”AMORE!”</b>' +
                        '</p>' +
                        '会場：昭和音楽大学内ユリホール （神奈川県）</br>' +
                        'イタリア歌曲、日本歌曲、イタリアオペラからアリア、デュエットなど</br>' +
                    '</div>' +
                    '出演者：井出司（テノール）友杉誠志（バス）中ノ森めぐみ（ピアノ）' +
                '</span>' +
            '</div>',
        infoWindow:
            '<div data-translatable>' +
                '<span>' +
                    'Tickets: 2,500 yen (presale 2,000 yen), students 1,000 yen, kids under 3 years old free entrance</br>' +
                    'Info: traumerei2017@yahoo.co.jp' +
                '</span>' +
                '<span>' +
                    'Biglietti: 2,500 yen (prevendita 2,000 yen), studenti 1,000 yen, fino a 3 anni gratis</br>' +
                    'Info: traumerei2017@yahoo.co.jp' +
                '</span>' +
                '<span>' +
                    'チケット：当日2,500円（前売り2,000円）学生券1,000円 未就学児無料</br>' +
                    'お問い合わせ：traumerei2017@yahoo.co.jp</br>' +
                    'チケット取扱店：昭和音楽大学チケットセンター' +
                '</span>' +
            '</div>',
        buyTicketURL: '#events'
    },
    {   // concerto Nino cafe 22/Apr/2017
        year: 2017,
        month: 4,
        day: 22,
        weekDay: 6,
        hour: 19,
        minute: '00',
        latitude: 35.667948,
        longitude: 139.727006,
        location:
            '<div data-translatable>' +
                '<span>' +
                    '<div style="margin-bottom: 10px">' +
                        '<p style="font-size: 17px">' +
                            '<b>Ferrari Happy Hour</b>' +
                        '</p>' +
                        'at Nino Caffè (Tokyo)</br>' +
                    '</div>' +
                    'Performers: <i>Paolo Andrea Di Pietro (Bass)</i>, <i>Megumi Nakanomori (Piano)</i>' +
                '</span>' +
                '<span>' +
                    '<div style="margin-bottom: 10px">' +
                        '<p style="font-size: 17px">' +
                            '<b>Ferrari Happy Hour</b>' +
                        '</p>' +
                        'presso Nino Caffè (Tokyo)</br>' +
                    '</div>' +
                    'Musicisti: <i>Paolo Andrea Di Pietro (Basso)</i>, <i>Megumi Nakanomori (Piano)</i>' +
                '</span>' +
                '<span>' +
                    '<div style="margin-bottom: 10px">' +
                        '<p style="font-size: 17px">' +
                            '<b>Ferrari Happy Hour</b>' +
                        '</p>' +
                        '会場：Nino Caffè（東京）</br>' +
                    '</div>' +
                    '出演者：パオロアンドレア・ディ・ピエトロ （バス）中ノ森めぐみ（ピアノ）' +
                '</span>' +
            '</div>',
        infoWindow:
            '<div data-translatable>' +
                '<span>' +
                    'Tickets: free entrance</br>' +
                '</span>' +
                '<span>' +
                    'Biglietti: entrata libera</br>' +
                '</span>' +
                '<span>' +
                    'チケット：入場無料</br>' +
                '</span>' +
            '</div>',
        buyTicketURL: '#events'
    },
    {   // concerto tempio 30/Lug/2017
        year: 2017,
        month: 7,
        day: 30,
        weekDay: 7,
        hour: 11,
        minute: '00',
        latitude: 35.572474,
        longitude: 139.667672,
        location:
            '<div data-translatable>' +
                '<span>' +
                    '<div style="margin-bottom: 10px">' +
                        '<p style="font-size: 17px">' +
                            '<b>Duo concert</b>' +
                        '</p>' +
                        'at Temple Shingyo-ji (Kanagawa)</br>' +
                        'organized by Classic Live for 1,000,000 people' +
                    '</div>' +
                    'Performers: <i>Natsuko Hosokawa (Violin)</i>, <i>Megumi Nakanomori (Piano)</i>' +
                '</span>' +
                '<span>' +
                    '<div style="margin-bottom: 10px">' +
                        '<p style="font-size: 17px">' +
                            '<b>Concerto duo</b>' +
                        '</p>' +
                        'presso Tempio Shingyo-ji (Kanagawa)</br>' +
                        'organizzato da Classic Live for 1,000,000 people' +
                    '</div>' +
                    'Musicisti: <i>Natsuko Hosokawa (Violino)</i>, <i>Megumi Nakanomori (Piano)</i>' +
                '</span>' +
                '<span>' +
                    '<div style="margin-bottom: 10px">' +
                        '<p style="font-size: 17px">' +
                            '<b>デュオコンサート</b>' +
                        '</p>' +
                        '会場：本門佛立宗 信行寺 （神奈川県）</br>' +
                        '主催 100万人のクラシックライブ' +
                    '</div>' +
                    '出演者：細川奈津子 （ヴァイオリン） 中ノ森めぐみ（ピアノ）' +
                '</span>' +
            '</div>',
        infoWindow:
            '<div data-translatable>' +
                '<span>' +
                    'details to be defined' +
                '</span>' +
                '<span>' +
                    'dettagli da definire' +
                '</span>' +
                '<span>' +
                    '詳細未定' +
                '</span>' +
            '</div>',
        buyTicketURL: 'http://1m-cl.com/'
    },
    {   // concerto yasugi 24/Set/2017
        year: 2017,
        month: 9,
        day: 24,
        weekDay: 7,
        hour: 14,
        minute: '00',
        latitude: 35.431327,
        longitude: 133.250700,
        location:
            '<div data-translatable>' +
                '<span>' +
                    '<div style="margin-bottom: 10px">' +
                        '<p style="font-size: 17px">' +
                            '<b>Opening concert Yasugi General Culture Hall</b>' +
                        '</p>' +
                        'at ARTEPIA  Yasugi General Culture Hall（Shimane）</br>' +
                        'Mozart, Beethoven, Chopin, Respighi, Liszt' +
                    '</div>' +
                    'Performers: <i>Megumi Nakanomori (Piano)</i>' +
                '</span>' +
                '<span>' +
                    '<div style="margin-bottom: 10px">' +
                        '<p style="font-size: 17px">' +
                            '<b>Concerto inaugurazione Yasugi General Culture Hall </b>' +
                        '</p>' +
                        'presso ARTEPIA  Yasugi General Culture Hall（Shimane）</br>' +
                        'Musica di Mozart, Beethoven, Chopin, Respighi, Liszt' +
                    '</div>' +
                    'Musicisti: <i>Megumi Nakanomori (Piano)</i>' +
                '</span>' +
                '<span>' +
                    '<div style="margin-bottom: 10px">' +
                        '<p style="font-size: 17px">' +
                            '<b>中ノ森めぐみコンサート スタインウェイピアノ開き</b>' +
                        '</p>' +
                        '会場：安来市総合文化ホール アルテピア 小ホール（島根県）</br>' +
                        '月光ソナタ（ベートーヴェン）、小犬のワルツ（ショパン）、愛の夢（リスト）他' +
                    '</div>' +
                    '出演者：中ノ森めぐみ（ピアノ）' +
                '</span>' +
            '</div>',
        infoWindow:
            '<div data-translatable>' +
                '<span>' +
                    'Tickets: 2,000yen (presale 1,500yen)</br>' +
                    'Info 0854-21-0101 (ARTEPIA)' +
                '</span>' +
                '<span>' +
                    'Biglietti: 2,000yen (prevendita 1,500yen)</br>' +
                    'Info 0854-21-0101 (ARTEPIA)' +
                '</span>' +
                '<br>' +
                    'チケット：当日2,000円（前売り1,500円</br>' +
                    'お問い合わせ 0854-21-0101（アルテピア）' +
                '</span>' +
            '</div>',
        buyTicketURL: 'http://artepia.jp/'
    },
    {   // concerto natale 24/Dic/2017
        year: 2017,
        month: 12,
        day: 24,
        weekDay: 7,
        hour: 19,
        minute: '00',
        latitude: 35.425717,
        longitude: 133.328473,
        location:
            '<div data-translatable>' +
                '<span>' +
                    '<div style="margin-bottom: 10px">' +
                        '<p style="font-size: 17px">' +
                            '<b>Christmas diner concert</b>' +
                        '</p>' +
                        'at ANA HOTEL YONAGO (Tottori)</br>' +
                    '</div>' +
                    'Performers: <i>Chie Sadayama (Sop.)</i>, <i>Toshiaki Murakami (Ten.)</i>, <i>Megumi Nakanomori (Piano)</i>' +
                '</span>' +
                '<span>' +
                    '<div style="margin-bottom: 10px">' +
                        '<p style="font-size: 17px">' +
                            '<b>Concerto di Natale</b>' +
                        '</p>' +
                        'presso ANA HOTEL YONAGO (Tottori)</br>' +
                    '</div>' +
                    'Musicisti: <i>Chie Sadayama (Sop.)</i>, <i>Toshiaki Murakami (Ten.)</i>, <i>Megumi Nakanomori (Piano)</i>' +
                '</span>' +
                '<span>' +
                    '<div style="margin-bottom: 10px">' +
                        '<p style="font-size: 17px">' +
                            '<b>クリスマス・ディナーコンサート（仮）</b>' +
                        '</p>' +
                        '会場：米子全日空ホテル（鳥取県）</br>' +
                    '</div>' +
                    '出演者：佐田山千恵（ソプラノ）村上敏明（テノール）中ノ森めぐみ（ピアノ）' +
                '</span>' +
            '</div>',
        infoWindow:
            '<div data-translatable>' +
                '<span>' +
                    'details to be defined' +
                '</span>' +
                '<span>' +
                    'dettagli da definire' +
                '</span>' +
                '<span>' +
                    '詳細未定' +
                '</span>' +
            '</div>',
        buyTicketURL: '#events'
    }
];
