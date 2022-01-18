const defaultResult = 0;
let currentResult = defaultResult;

function getUserNumberIntput() {
	return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
	const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
	outputResult(currentResult, calcDescription);
}

function add() {
	const enteredNumber = getUserNumberIntput();
	const initialResult = currentResult;
	currentResult = initialResult + parseInt(enteredNumber);
	createAndWriteOutput("+", initialResult, enteredNumber);
}

function subtract() {
	const enteredNumber = getUserNumberIntput();
	const initialResult = currentResult;
	currentResult = initialResult - parseInt(enteredNumber);
	createAndWriteOutput("-", initialResult, enteredNumber);
}

function multiply() {
	const enteredNumber = getUserNumberIntput();
	const initialResult = currentResult;
	currentResult = initialResult * parseInt(enteredNumber);
	createAndWriteOutput("*", initialResult, enteredNumber);
}

function divide() {
	const enteredNumber = getUserNumberIntput();
	const initialResult = currentResult;
	currentResult = initialResult / parseInt(enteredNumber);
	createAndWriteOutput("/", initialResult, enteredNumber);
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
