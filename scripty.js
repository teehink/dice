let player1Score = 0
let player2Score = 0
let player1Turn = true;

const rollBtn = document.getElementById('rollBtn')
const resetBtn = document.getElementById('resetBtn')
const message = document.getElementById('message')
const player1Scoreboard = document.getElementById('player1Scoreboard')
const player2Scoreboard = document.getElementById('player2Scoreboard')
const player1Die = document.getElementById('player1Die')
const player2Die = document.getElementById('player2Die')

rollBtn.addEventListener('click', function() {
  const dieRoll = Math.floor(Math.random() * 6) + 1
  console.log(dieRoll)
})
