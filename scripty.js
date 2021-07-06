//let player1Score = 0
//let player2Score = 0


let player1 = [score, scoreBoard, die, turn]
let player2 = [score, scoreBoard, die, turn]

let player1Turn = true;

const rollBtn = document.getElementById('rollBtn')
const resetBtn = document.getElementById('resetBtn')
const message = document.getElementById('message')
//const player1Scoreboard = document.getElementById('player1Scoreboard')
//const player2Scoreboard = document.getElementById('player2Scoreboard')
//const player1Die = document.getElementById('player1Die')
//const player2Die = document.getElementById('player2Die')


rollBtn.addEventListener('click', function() {
  const dieRoll = Math.floor(Math.random() *6) + 1
  clearActivePlayer()
    if (player1Turn) {
      player1.die.classList.add('active')
      player1.die.textContent = dieRoll
      player1.score += dieRoll
      player1.scoreboard.textContent = player1Score
      message.textContent = "Player 2 Turn"
      //player1Turn = false
    } else {
      player2Die.classList.add('active')
      player2Die.textContent = dieRoll
      player2Score += dieRoll
      player2Scoreboard.textContent = player2Score
      {
      message.textContent = "Player 1 Turn"
      }
      //player1Turn = true
    }

    if (player1Score >= 20) {
      message.textContent = "Player 1 has won!"
      changeBtnClass()
    } else if (player2Score >= 20) {
      message.textContent = "Player 2 has won!"
      changeBtnClass()
    }

    player1Turn = !player1Turn

})

function clearActivePlayer() {
  player1Die.classList.remove('active')
  player2Die.classList.remove('active')
}

function changeBtnClass() {
  rollBtn.style.display = "none"
  resetBtn.style.display = "block"
}

resetBtn.addEventListener('click', function() {
  reset()
})

function reset() {
  player1Score = 0
  player2Score = 0
  player1Scoreboard.textContent = player1Score
  player2Scoreboard.textContent = player2Score
  player1Die.textContent = "-"
  player2Die.textContent = "-"
  message.textContent = "Player 1 Turn"
  player1Turn = true
  resetBtn.style.display = "none"
  rollBtn.style.display = "block"
  player2Die.classList.remove('active')
  player1Die.classList.add('active')
}
