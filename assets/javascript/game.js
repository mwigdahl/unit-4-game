// Setting Global Variables
var randomNumber = Math.floor(Math.random() * (120 - 19) + 1) + 19;
var crystalArray = [];
var crystalNumber = 0;
var counter = 0;

var wins = 0;
var losses = 0;

//Select a random number

function selectNumber() {

    var crystalValues = function () {
        return Math.floor(Math.random() * 10);
    }

    var crystalArray = Array(4).fill(0).map(crystalValues);

    console.log("crystalArray", crystalArray);

    // Create for loop to create each image and add values & attributes
    for (var i = 0; i < crystalArray.length; i++) {

        var crystalImage = $('<img>');

        crystalImage.addClass('crystal-image p-2');
        crystalImage.attr("src", 'assets/images/crystal-' + i + '.png');
        crystalImage.attr('data-crystalvalue', crystalArray[i]);
        $('#crystals').append(crystalImage);
    }

}


function startGame() {

    selectNumber();

    $('#random-number').html(randomNumber);

    $('.crystal-image').on('click', function () {

        var crystalNumber = $(this).attr("data-crystalvalue");
        console.log("crystalNumber ", crystalNumber);

        if (counter < randomNumber) {

            crystalNumber = parseInt(crystalNumber);
            counter += crystalNumber;

            console.log("counter ", counter);
            $('#counter').html('Your current score: ' + counter);

        }

        if (counter === randomNumber) {

            winGame();
            resetGame();

        }  else if (counter > randomNumber) {
            losses++;
            $('#losses').html('Losses: ' + losses);
            loseGame();
            resetGame();
        };


    });

}

startGame();

function resetGame() {
    counter = 0;
    randomNumber = Math.floor(Math.random() * (120 - 19) + 1) + 19;
    $('#crystals').empty();
    $('#counter').html('Your current score: ' + counter);
    startGame();
}

function winGame() {
    alert("You Win the Game!");
    wins++;
    $('#wins').html('Wins: ' + wins);
}

function loseGame() {
    alert("You Lost the Game!  Try again.");
}

