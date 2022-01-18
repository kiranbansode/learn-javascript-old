const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

// Gets input from input field
function getUserNumberIntput() {
	return parseInt(userInput.value);
}

// Generates and writes calculation log
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
	const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
	outputResult(currentResult, calcDescription); // from vendor file
}

function writeToLog(
	operationIdentifier,
	prevResult,
	operationNumber,
	newResult
) {
	const logEntry = {
		operation: operationIdentifier,
		prevResult: prevResult,
		number: operationNumber,
		result: newResult,
	};

	logEntries.push(logEntry);
	console.log(logEntries);
}

function add() {
	const enteredNumber = getUserNumberIntput();
	const initialResult = currentResult;
	currentResult += parseInt(enteredNumber);
	createAndWriteOutput("+", initialResult, enteredNumber);
	writeToLog("ADD", initialResult, enteredNumber, currentResult);
}

function subtract() {
	const enteredNumber = getUserNumberIntput();
	const initialResult = currentResult;
	currentResult -= parseInt(enteredNumber);
	createAndWriteOutput("-", initialResult, enteredNumber);
	writeToLog("SUBTRACT", initialResult, enteredNumber, currentResult);
}

function multiply() {
	const enteredNumber = getUserNumberIntput();
	const initialResult = currentResult;
	currentResult *= parseInt(enteredNumber);
	createAndWriteOutput("*", initialResult, enteredNumber);
	writeToLog("MULTIPLY", initialResult, enteredNumber, currentResult);
}

function divide() {
	const enteredNumber = getUserNumberIntput();
	const initialResult = currentResult;
	currentResult /= parseInt(enteredNumber);
	createAndWriteOutput("/", initialResult, enteredNumber);
	writeToLog("DIVIDE", initialResult, enteredNumber, currentResult);
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);

/* 
	Not related to Calculator
	! Code will be delete in next lecture
*/

let userName;
console.log(userName); // undefined
userName = null;
console.log(userName); // null
console.log(NaN * 3); // NaN
