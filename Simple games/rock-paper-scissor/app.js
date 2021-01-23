const game = () => {
  let pScore = 0;
  let cScore = 0;
  const playBtn = document.querySelector
    ('.intro button');
    const introScreen = document.querySelector
    ('.intro');
    const match = document.querySelector
    ('.match');
     const options = document.querySelectorAll
    ('.options button');
    const playerHand = document.querySelector
    ('.player-hand');
    const computerHand = document.querySelector
    ('.computer-hand');
    const hands = document.querySelectorAll(".hands img");
    const playerScore = document.querySelector('.player-score p');
    const computerScore = document.querySelector('.computer-score p');

  //start the game
  const startGame = () => {
    

    playBtn.addEventListener('click', () => {
      introScreen.classList.add("fadeOut");
      match.classList.add("fadeIn");
    });
  };

  //play match 
  const playMatch = () => {
   

    hands.forEach(hand => {
      hand.addEventListener('animationend', function() {
        this.style.animation = "";
      });
    });
    //computer options
    const computerOptions = ['rock', 'paper', 'scissors'];

    options.forEach(option=> {
      option.addEventListener('click', function() {
        //computer choice
        const computerNumber = Math.floor(Math.random()*3);
        const computerChoice = computerOptions[computerNumber];
        //console.log(computerChoice);

        setTimeout(() => {
          compareHands(this.textContent, computerChoice);
          playerHand.src = `./img/${this.textContent}.png`;
          computerHand.src = `./img/${computerChoice}.png`;
        }, 500);
        

        playerHand.style.animation = "shakePlayer 2s ease";
        computerHand.style.animation = "shakeComputer 2s ease";
      });
      // console.log(this);
    });
    
    // console.log(computerNumber);
  };

  const updateScore = () => {
    
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
    restartGame();
  };

  const restartGame = () => {
    if (pScore === 2 || cScore === 2) {
     
      if (pScore > cScore) {
        //match.classList.add('restart');
        match.innerHTML = 'Gracz wygrywa mecz, Gratulacje';
       setTimeout(() => {
           match.textContent = 'Restart gry!';
        }, 4000)
        
      } else {
        if (pScore < cScore) {
          //match.classList.add('restart');
          match.innerHTML = 'Komputer wygrywa mecz. Odegraj się';
         setTimeout(() => {
            match.textContent = 'Restart gry!';
         }, 4000);
         
         
        } else {
          //match.classList.add('restart');
          match.innerHTML = 'Remis pojedynku. Próbuj dalej';
          setTimeout(() => {
            match.textContent = 'Restart gry!';
          }, 4000)
          
        }
      }
      setTimeout(() => {
      //introScreen.classList.add("fadeIn");
       window.location.reload(true);
      }, 8000)
       
    }
   
    };


  const compareHands = (playerChoice, computerChoice) => {
    //compare hands
    const winner = document.querySelector('.winner');
    if (playerChoice === computerChoice) {
      winner.textContent = 'Remis!';
      return;
    }
    
    //check the rock
    if (playerChoice === 'rock') {
      if (computerChoice === 'scissors') {
        winner.textContent = "Gracz wygrywa";
        pScore++;
        updateScore();
        return;
      } else {
          winner.textContent = 'Komputer wygrywa';
          cScore++;
          updateScore();
          return;
      }
    } 
    //check the paper
    if (playerChoice === 'paper') {
      if (computerChoice === 'scissors') {
        winner.textContent = 'Komputer wygrywa';
        cScore++;
        updateScore();
        return;
      } else {
          winner.textContent = 'Gracz wygrywa';
          pScore++;
          updateScore();
          return;
      }
    } 
    //check the scissors
    if (playerChoice === 'scissors') {
      if (computerChoice === 'rock') {
        winner.textContent = 'Komputer wygrywa';
        cScore++;
        updateScore();
        return;
      } else {
          winner.textContent = 'Gracz wygrywa';
          pScore++;
          updateScore();
          return;
      }
    } 
  }
  //call of the inner function
  startGame();
  playMatch();
};
//start the game function
game();



