/**
 * Created by misa on 20/09/15.
 */

var collaborations = [
    {
        "id": 1,
        "title": "Takahiro AKIBA *" +
                 "Takahiro AKIBA *" +
                 "Takahiro AKIBA",
        "imgSmall": "img/collaborations/akiba/akiba_small.jpg",
        "imgMedium": "img/collaborations/akiba/akiba_medium.jpg",
        "imgLarge": "img/collaborations/akiba/akiba_large.jpg",
        "intro": "Pianist *" +
                 "Pianist *" +
                 "Pianist",
        "txt":[
            {
                "txt": "Pianist *" +
                       "Pianist *" +
                       "Pianist"
            }
        ]
    },
    {
        "id": 2,
        "title": "Milano Saxophone Quartet *" +
                 "Milano Saxophone Quartet *" +
                 "Milano Saxophone Quartet",
        "imgSmall": "img/collaborations/msq/msq_small.jpg",
        "imgMedium": "img/collaborations/msq/msq_medium.jpg",
        "imgLarge": "img/collaborations/msq/msq_large.jpg",
        "intro": "Pianist *" +
                 "Pianist *" +
                 "Pianist",
        "txt":[
            {
                "txt": "Pianist *" +
                       "Pianist *" +
                       "Pianist"
            }
        ]
    }
];

$(function() {
    var sortedCollaborations = shuffleArray(collaborations);

    $(".collaboration-item").each(function(index, element){
        var collaboration = sortedCollaborations[index];
        $(element).children(".collaboration-img").html("<img src='" + collaboration.imgMedium + "' alt='' />");
        $(element).children(".collaborations").data("collaboration-details", JSON.stringify([collaboration]));
        $(element).children(".collaborations").children(".collaboration-title").html(collaboration.title);
    });
});

/**
 * Randomize array element order in-place.
 * Using Durstenfeld shuffle algorithm.
 */
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}