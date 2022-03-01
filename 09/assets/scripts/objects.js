const person = {
	name: "Kiran",
	age: 26,
	hobbies: ["Sports", "Coocking"],
	greet: function () {
		alert("Hi there");
	},
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

console.log(person);
