const startGameBtn = document.getElementById("start-game-btn");

// function expression
const start = function () {
	console.log("Game is starting...");
};

/* const person = {
	name: "Kiran",
	greet: function greet() {
		console.log("Hello there!");
	},
};

person.greet();

console.dir(startGame);  */

startGameBtn.addEventListener("click", start);
