var randomNumber = Math.floor(Math.random() * (120 - 19) + 1) + 19;
var crystalArray = [];

var wins = 0;
var losses = 0;
var counter = 0;

// for (var i = 0, i < crystalArray.length; i++) {
//     var crystalArray = [];
// }

var crystalValues = function(){
    return Math.floor(Math.random() * 10);
}
var crystalArray = Array(4).fill(0).map(crystalValues);

console.log("crystalArray", crystalArray);


for (var i = 0; i < crystalArray.length; i++) {
    var crystalImage =  $('<img>');
    crystalImage.addClass('crystal-image');
    crystalImage.attr("src", 'assets/images/crystal-' + i + '.png');
    //console.log('crystalArray ', crystalArray);
    crystalImage.attr('data-crystalvalue', crystalArray[i]);
    $('#crystals').append(crystalImage);
}


function startGame() {
    $('#random-number').append(randomNumber);
    $('.crystal-image').on('click', function () {

        var crystalNumber = $(this).attr("data-crystalvalue");
        console.log("crystalNumber ", crystalNumber);
    });

    $('#counter').html('');

    if (crystalNumber === randomNumber) {
        wins++;
    } else if {
        (crystalNumber < randomNumber) {
            counter += crystalNumber;
        }
    }

}

startGame();