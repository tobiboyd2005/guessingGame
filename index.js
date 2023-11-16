
  var randomNum = getRandomNumber(1, 10);
  var onClick = 1;
  var tryAgainButton = document.getElementById("tryAgain");
  tryAgainButton.style.display = "none";
  function getRandomNumber(min, max) {
    const randomDecimal = Math.random();
    const randomNumber = Math.floor(randomDecimal * (max - min + 1)) + min;
    return randomNumber;
  }

  function main() {
    var input = document.getElementById("number-input");
    var comm = document.getElementById("comment");
    var attemptsElement = document.getElementById("attempts");

    var userGuess = parseInt(input.value);
// Hide the button

    if (userGuess === randomNum) {
      comm.innerHTML = "Correct!";
      document.getElementById("number-input").style.display = "none";
      document.getElementById("submit").style.display = "none";
      tryAgainButton.style.display = 'block';
    } else if (userGuess > randomNum) {
      comm.innerHTML = "Go lower!";
    } else if (userGuess < randomNum) {
      comm.innerHTML = "Go higher!";
    }

    attemptsElement.innerHTML = onClick++;
    
    if (onClick === 4 && userGuess !== randomNum) {
        tryAgainButton.style.display = 'block';
        document.getElementById("number-input").style.display = "none";
        document.getElementById("submit").style.display = "none";
        document.getElementById("comment").innerHTML = "The number was " + randomNum;
    }

    document.getElementById('myForm').addEventListener('submit', function(event) {
        // Prevent the form from being submitted (default behavior)
        event.preventDefault();
      });
  }

  function resetGame() {
    // Reset the game logic and UI
    randomNum = getRandomNumber(1, 10);
    onClick = 1;
    tryAgainButton.style.display = 'none';
    document.getElementById("comment").innerHTML = "";
    document.getElementById("attempts").innerHTML = "0";
    document.getElementById("number-input").value = "";
  }





