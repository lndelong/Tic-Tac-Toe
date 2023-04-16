// variables for players 1 & 2
const playerX = ('X');
const playerO = ('O');

// array with all winning combinations
const winningCombo = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6]
];

const cellElements = [document.querySelectorAll(`[class*="cell"]`), ];
const boardElement = document.getElementById('board');
const winningMessageElement = document.getElementById('winningMessage');
const restartButton = document.getElementById('restartButton');
const winningMessageTextElement = document.getElementById('winningMessageText');
const xImage = document.getElementById('xImage');
const oImage = document.getElementById('oImage');
let isPlayerOTurn = false
let currentClass = '';



const cellZero = document.getElementById('0')
const cellOne = document.getElementById('1')
const cellTwo = document.getElementById('2')
const cellThree = document.getElementById('3')
const cellFour = document.getElementById('4')
const cellFive = document.getElementById('5')
const cellSix = document.getElementById('6')
const cellSeven = document.getElementById('7')
const cellEight = document.getElementById('8')



start();

restartButton.addEventListener('click', start)

function start() {
	let isPlayerOTurn = false;
	cellElements.forEach(cell => {
		// cell.classList.remove('X')
		// cell.classList.remove('O')
		document.querySelectorAll(`[class*="X"]`).remove;
		document.querySelectorAll(`[class*="O"]`).remove;
		cellZero.addEventListener('click', clickCell);
		cellOne.addEventListener('click', clickCell);
		cellTwo.addEventListener('click', clickCell);
		cellThree.addEventListener('click', clickCell);
		cellFour.addEventListener('click', clickCell);
		cellFive.addEventListener('click', clickCell);
		cellSix.addEventListener('click', clickCell);
		cellSeven.addEventListener('click', clickCell);
		cellEight.addEventListener('click', clickCell);
		// document.getElementById('winningMessage').hidden = True;
	})
	//setBoardHoverClass()
	winningMessageElement.classList.remove('show');
}


function clickCell(e) {
	const cell = e.target
	let currentClass = isPlayerOTurn ? playerO : playerX
	placeMark(cell, currentClass)
	if (checkWin(currentClass)) {
		endGame(false)
	} else if (isDraw()) {
		endGame(true)
	} else {
		swapTurns()
		//setBoardHoverClass()
	}
}

function placeMark(cell, currentClass) {
    cell.classList.add(currentClass);
	addImage(cell);
	swapTurns();
}



function checkWin(currentClass) {
    return winningCombo.some(combination => {
        return combination.every(index => {
            return cellElements[index].classList.contains(currentClass)
        })
    })
}

function endGame(draw) {
    if (draw) {
        winningMessageTextElement.innerText.add("It's a draw!")
    } else {
        winningMessageTextElement.innerText.add(`The ${isPlayerOTurn ? "O's" : "X's"} win!`)
    }
    winningMessageElement.classList.add('show')
}

function swapTurns() {
    isPlayerOTurn = !isPlayerOTurn
}

function addImage(cell) {
if (cell.classList.contains('X')) {
	cell.firstChild.style.display = "block";
 }	else if  (cell.classList.contains('O')) {
	cell.lastChild.style.display = "block";
 }
}


function setBoardHoverClass(isPlayerOTurn) {
	boardElement.classList.remove(playerX)
	boardElement.classList.remove(playerO)
	if (isPlayerOTurn) {
		boardElement.classList.add(playerO)
	} else {
		boardElement.classList.add(playerX)
	}
}

function isDraw() {
	let playedCells = cellElements.includes(('O') || ('X'))
		if (playedCells.length > 8){
			return true;
		} else {
			return false
		}
	}

	
	
		
	
