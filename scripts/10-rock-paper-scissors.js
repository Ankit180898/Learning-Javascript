 // global variables - can be accessed
      // outside the function
      let result = "";
      let computerMove = "";
      let score =
        // check if score is already in local storage
        JSON.parse(localStorage.getItem("score")) || {
          wins: 0,
          losses: 0,
          ties: 0,
        };
      updateScoreElement();

      /*  
    if (!score) {
      // if not, initialize it
      score = {
        wins: 0,
        losses: 0,
        ties: 0,
      };
    } else {
      // if it is, set the score to the value in local storage
      score = {
        wins: score.wins,
        losses: score.losses,
        ties: score.ties,
      };
    }
      */

      function getComputerMove() {
        // function scope
        // local variables - can't be accessed
        // outside the function
        const randomNumber = Math.random();
        if (randomNumber >= 0 && randomNumber < 1 / 3) {
          computerMove = "rock";
        } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
          computerMove = "paper";
        } else {
          computerMove = "scissors";
        }
        return computerMove;
      }
      function getResult(userMove) {
        const computerMove = getComputerMove();
        if (userMove === "rock") {
          if (computerMove === "scissors") {
            result = "YOU WIN";
          } else if (computerMove === "paper") {
            result = "YOU LOSE";
          } else {
            result = "TIE";
          }
        } else if (userMove === "paper") {
          if (computerMove === "rock") {
            result = "YOU WIN";
          } else if (computerMove === "scissors") {
            result = "YOU LOSE";
          } else {
            result = "TIE";
          }
        } else if (userMove === "scissors") {
          if (computerMove === "paper") {
            result = "YOU WIN";
          } else if (computerMove === "rock") {
            result = "YOU LOSE";
          } else {
            result = "TIE";
          }
        }

        // we update the score according to the result
        if (result === "YOU WIN") {
          score.wins++;
        } else if (result === "YOU LOSE") {
          score.losses++;
        } else {
          score.ties++;
        }

        // save the score to local storage
        localStorage.setItem("score", JSON.stringify(score));
        updateScoreElement();
        document.querySelector(".js-result").innerHTML = result;
        document.querySelector(
          ".js-move"
        ).innerHTML = `You <img src="images/${userMove}.png" class="move-icon">
        <img src="images/${computerMove}.png" class="move-icon">
        Computer`;

        return result;
        // it wont give anything after the return statement
        // console.log(result);
      }
      function updateScoreElement() {
        document.querySelector(
          ".js-score"
        ).innerHTML = ` Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
      }