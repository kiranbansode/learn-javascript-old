const defaultResult = 0;
let currentResult = defaultResult;

// Gets input from input field
function getUserNumberIntput() {
	return parseInt(userInput.value);
}

// Generates and writes calculation log
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
	const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
	outputResult(currentResult, calcDescription); //from vendor file
}

function add() {
	const enteredNumber = getUserNumberIntput();
	const initialResult = currentResult;
	currentResult += parseInt(enteredNumber);
	createAndWriteOutput("+", initialResult, enteredNumber);
}

function subtract() {
	const enteredNumber = getUserNumberIntput();
	const initialResult = currentResult;
	currentResult -= parseInt(enteredNumber);
	createAndWriteOutput("-", initialResult, enteredNumber);
}

function multiply() {
	const enteredNumber = getUserNumberIntput();
	const initialResult = currentResult;
	currentResult *= parseInt(enteredNumber);
	createAndWriteOutput("*", initialResult, enteredNumber);
}

function divide() {
	const enteredNumber = getUserNumberIntput();
	const initialResult = currentResult;
	currentResult /= parseInt(enteredNumber);
	createAndWriteOutput("/", initialResult, enteredNumber);
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
