const newGame = document.querySelector(".new-game");
const rollDice = document.querySelector(".roll-dice");
const hold = document.querySelector(".hold-score");
const diceImg = document.querySelector(".game-btn-dice-img img");
const player1 = document.querySelector('.player1');
const player2 = document.querySelector('.player2');

let totalScore = [0, 0];
let roundScore = [0, 0];

let generateDiceScore = () => {
  return Math.floor(Math.random() * 6) + 1;
};

let playerChance = 1;

hold.addEventListener('click', ()=>{
  hold.classList.add('onclick');
  if(playerChance === 1){
    totalScore[0] += roundScore[0];
    roundScore[0] = 0;
    document.querySelector('.player1-total-score').innerText = totalScore[0];
    document.querySelector('.player1-round-score').innerText = roundScore[0];
    player2.classList.remove('not-chance');
    player1.classList.add('not-chance');
    playerChance = 2;
  }else{
    totalScore[1] += roundScore[1];
    roundScore[1] = 0;
    document.querySelector('.player2-total-score').innerText = totalScore[1];
    document.querySelector('.player2-round-score').innerText = roundScore[1];
    player1.classList.remove('not-chance');
    player2.classList.add('not-chance');
    playerChance = 1;
  }
  setTimeout(()=>{
    hold.classList.remove('onclick');
  },300)
})

rollDice.addEventListener("click", () => {
  rollDice.classList.add('onclick');
  let diceScore = generateDiceScore();
  diceImg.src = `dice-${diceScore}.png`;
  if(playerChance === 1){
    roundScore[0] += diceScore;
    document.querySelector('.player1-round-score').innerText = roundScore[0];
    if(diceScore === 1){
      roundScore[0] = 0;
      document.querySelector('.player1-round-score').innerText = roundScore[0];
      setTimeout(()=>{
        hold.click();
      },600)
    }
  }else{
    roundScore[1] += diceScore;
    document.querySelector('.player2-round-score').innerText = roundScore[1];
    if(diceScore === 1){
      roundScore[0] = 0;
      document.querySelector('.player2-round-score').innerText = roundScore[1];
      setTimeout(()=>{
        hold.click();
      },600)
    }
  }
  setTimeout(()=>{
    rollDice.classList.remove('onclick');
  },300)
});

newGame.addEventListener('click',()=>{
  newGame.classList.add('onclick');
  roundScore = [0,0];
  totalScore = [0,0];
  document.querySelector('.player1-total-score').innerText = totalScore[0];
  document.querySelector('.player2-total-score').innerText = totalScore[1];
  document.querySelector('.player1-round-score').innerText = roundScore[0];
  document.querySelector('.player2-round-score').innerText = roundScore[1];
  setTimeout(()=>{
    newGame.classList.remove('onclick')
  },300);
  player1.classList.remove('not-chance');
  player2.classList.remove('not-chance');
})

if(totalScore[0] >= 100 || totalScore[1] >= 100){
  if(totalScore[0] >= 100){
    document.querySelector('.player1 h1').innerText = 'WINNER';
  }
  else{
    document.querySelector('.player2 h1').innerText = 'WINNER';
  }
}


