function generateRandomNumber (minimum, maximum) {
    let result = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
    return result;
} 

// addEventListener reaguje na nejakou akci, 1. parametr na co chceme reagovat, druhy parametr jak na to chceme reagovat
// v console log prvni parametr popis abychov vedeli co to je, druhy parametr co chceme vypsat

// vse piseme do funkce, ktera se vykona pri nacteni okna, jinak by jeste neexistovali vsechny elementy
window.addEventListener('load', function () {
    let randomNumber = generateRandomNumber(0, 100);
    console.log('randomNumber', randomNumber);

    let guessCounter = 0;

    let guessForm = document.querySelector('.guess-form');
    // hledame element v dokumentu
    let inputNumber = document.querySelector('.input-number');
    console.log('inputnumber', inputNumber);
    let titleElement = document.querySelector('.title');
    let playAgainButton = document.querySelector('.play-again-button');
    let lowestNumber = document.querySelector('.lowest-number');
    let highestNumber = document.querySelector('.highest-number');

    playAgainButton.addEventListener('click', function() {
        document.location.reload();
    })

    guessForm.addEventListener('submit', function(event) {
        event.preventDefault();
        // event rekneme aby prestal vykonavat, to co by normalne udelal, nechceme aby se nam vzdy znovu nacetla stranka
        let userGuess = Number(inputNumber.value);
        console.log('hadane cislo', userGuess);
        // pozor input je string
        guessCounter = guessCounter + 1;

        if (userGuess === randomNumber) {
            titleElement.innerHTML = '*** You are a winner. You won on ' + guessCounter + ' guesses ***';
            // guessButton.style.display = 'none';
            // playAgainButton.style.display = 'inline-block';
            document.body.className = 'winner';
        } else if (userGuess > randomNumber) {
            titleElement.innerHTML = "Your guess is too high.";
            highestNumber.innerHTML = userGuess;
        } else {
            titleElement.innerHTML = "Your guess is too low.";
            lowestNumber.innerHTML = userGuess;
        }

    });

});


