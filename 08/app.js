/* // Most preferable way to create array
const numbers = [1, 2, 3];
console.log(numbers);
// [1, 2, 3]

const moreNumbers = new Array("Hi", 5, 2);
console.log(moreNumbers);
// ["Hi", 5, 2]

const moreNumbers2 = new Array(5);
console.log(moreNumbers2);
//[empty x 5]

const yetMoreNumbers = Array.of(1, 2);
console.log(yetMoreNumbers);
// [1, 2] => slow in terms of performance

const moreNumbers3 = Array.from("Welcome");
console.log(moreNumbers3);
// ['W', 'e', 'l', 'c', 'o', 'm', 'e']

const listItems = document.querySelectorAll("li");
console.log(listItems);
// NodeList(3) [li, li, li]

console.log(Array.from(listItems));
// [li, li, li]
 */

/* const personalData = [30, "Kiran", { moreDetails: [] }];

const analyticsData = [
	[1, 2, 6],
	[-5, 4, 2.1],
];

for (const data of analyticsData) {
	for (const dataPoint of data) {
		console.log(dataPoint);
	}
}

console.log(personalData[1]); */

const hobbies = ["Cooking", "Sports"];
hobbies.push("Coding");
hobbies.unshift("Reading");
const poppedValue = hobbies.pop();
hobbies.shift();
console.log(hobbies);

hobbies[1] = "Coding";
hobbies[5] = "Gaming";
console.log(hobbies);
