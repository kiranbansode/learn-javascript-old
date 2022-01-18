const defaultResult = 0;
let currentResult = defaultResult;

function getUserNumberIntput() {
	return parseInt(userInput.value);
}

function add() {
	const enteredNumber = getUserNumberIntput();
	const calcDescription = `${currentResult} + ${enteredNumber}`;
	currentResult = currentResult + parseInt(enteredNumber);
	outputResult(currentResult, calcDescription);
}

addBtn.addEventListener("click", add);
