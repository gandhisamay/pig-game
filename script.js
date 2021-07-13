const newGame = document.querySelector(".new-game");
const rollDice = document.querySelector(".roll-dice");
const hold = document.querySelector(".hold-score");
const diceImg = document.querySelector(".game-btn-dice-img img");

let totalScore = [0, 0];
let roundScore = [0, 0];

let generateDiceScore = () => {
  return Math.floor(Math.random() * 6) + 1;
};

let playerChance = 1;

rollDice.addEventListener("click", () => {
  let diceScore = generateDiceScore();
  diceImg.src = `dice-${diceScore}.png`;
});
