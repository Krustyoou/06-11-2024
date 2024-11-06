let score = JSON.parse(localStorage.getItem('score')) || {
  Win: 0,
  Loss: 0,
  Ties: 0
};

function playGame (playerMove) {

  const computerMove = pickComputerMove();
  let result = '';

  if (playerMove === 'Rock') {
    if (computerMove === 'Rock') {
      result = 'Tie';
    } else if (computerMove === 'Paper') {
      result = 'You lost';
    } else if (computerMove === 'Scissors') {
      result = 'You won';
    }

  } else if (playerMove === 'Paper') {
    if (computerMove === 'Rock') {
      result = 'You won';
    } else if (computerMove === 'Paper') {
      result = 'Tie';
    } else if (computerMove === 'Scissors') {
      result = 'You lost';
    }

  } else if (playerMove === 'Scissors') {
    if (computerMove === 'Rock') {
      result = 'You lost';
    } else if (computerMove === 'Paper') {
      result = 'You won';
    } else if (computerMove === 'Scissors') {
      result = 'Tie';
    }
  }

  if (result === 'You won') {
    score.Win += 1
  } else if (result === 'You lost') {
    score.Loss += 1
  } else if (result === 'Tie') {
    score.Ties += 1
  }

  localStorage.setItem('score', JSON.stringify(score));
  updateScoreElement();

  document.querySelector('.js-result')
    .innerHTML = `${result}.`

  document.querySelector('.js-moves')
    .innerHTML = `You        
    <img class="move-icon" src="images/${playerMove}-emoji.png">
    <img class="move-icon" src="images/${computerMove}-emoji.png">
    Computer`;

}

function updateScoreElement () {
  document.querySelector('.js-score')
    .innerHTML = `Wins: ${score.Win} Losses: ${score.Loss} Ties: ${score.Ties}`;
}

function pickComputerMove () {
  const randomNumber = Math.random()

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = 'Rock';
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'Paper';
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = 'Scissors';
  }     

  return computerMove;
}