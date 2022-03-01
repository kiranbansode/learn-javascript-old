const movieList = document.getElementById("movie-list");

movieList.style["background-color"] = "red";
movieList.style.display = "block";

const userChosenKeys = "level";

// create an object
const person = {
	// special keys
	"first name": "Kiran",
	age: 26,
	// setting property dynamically
	[userChosenKeys]: "...",
	hobbies: ["Sports", "Coocking"],
	greet: function () {
		alert("Hi there");
	},
	1.5: "Hello",
};

// deleting property
delete person.age;

// modifying existing property
// person.age = undefined;
person.age = null;

// deleting property
delete person.age;

// Adding new property
person.isAdmin = true;

const keyName = "first name";

// access property dynamically
console.log(person[keyName]);
console.log(person[1.5]);
console.log(person);
