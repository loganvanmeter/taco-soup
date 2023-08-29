var harryPotterTitles = [
	"and the Sorcerer's Stone",
	"and the Chamber of Secrets",
	"and the Prisoner of Azkaban",
	"and the Goblet of Fire",
	"and the Order of the Phoenix",
	"and the Half-Blood Prince",
	"and the Deathly Hallows",
];

for (let i = 0; i < harryPotterTitles.length; i++) {
	console.log(`Harry Potter ${harryPotterTitles[i]}`);
}

var grades = [
	92, 91, 75, 66, 52, 90, 83, 85, 64, 90, 72, 88, 77, 98, 100, 73, 92,
];
let letterGrades = [];
//creates new array of letter grades
const convertToLetterGrades = function (arr1, arr2) {
	arr1.filter((numGrade) =>
		numGrade >= 0 && numGrade <= 69
			? arr2.push("F")
			: numGrade >= 70 && numGrade <= 76
			? arr2.push("D")
			: numGrade >= 77 && numGrade <= 84
			? arr2.push("C")
			: numGrade >= 85 && numGrade <= 92
			? arr2.push("B")
			: numGrade >= 93 && numGrade <= 100
			? arr2.push("A")
			: arr2.push("Not a valid grade")
	);
};
//takes letter grades and prints them to the console
const printGrades = function (arr1, arr2) {
	convertToLetterGrades(arr1, arr2);
	arr2.forEach((grade) =>
		grade === "A" || grade === "F"
			? console.log(`You got an ${grade}`)
			: console.log(`You got a ${grade}`)
	);
};
printGrades(grades, letterGrades);
// declare function
const howMany = function (arr) {
	let aAcc = 0;
	let bAcc = 0;

	//find how many of A and how many of B students
	arr.map((grade) => {
		if (grade === "A") {
			aAcc++;
		} else if (grade === "B") {
			bAcc++;
		}
	});
	//prints those finding to the console
	console.log(`${aAcc} students have an A.`);
	console.log(`${bAcc} students have a B.`);
};

howMany(letterGrades);
//find most common number grades
function findModes(arr) {
	let frequency = [];
	let compare = 0;
	let mode = [];

	for (let i = 0; i < arr.length; i++) {
		let num = arr[i];

		if (frequency[num] === undefined) {
			frequency[num] = 1;
		} else {
			frequency[num] = frequency[num] + 1;
		}

		if (frequency[num] > compare) {
			compare = frequency[num];
			mode.push(num);
		}
	}
	return mode;
}

const mode = findModes(grades);
const modeLetterGrades = [];

//convert to letter grade
convertToLetterGrades(mode, modeLetterGrades);
//function to remove duplicate entries in an array
const removeDuplicates = function (arr) {
	let unique = [];
	for (let i = 0; i < arr.length; i++) {
		if (unique.indexOf(arr[i]) === -1) {
			unique.push(arr[i]);
		}
	}
	return unique;
};
//finds most common Letter grade
const mostCommon = removeDuplicates(modeLetterGrades);
console.log(mode);
console.log(mostCommon);

let sentence = "";
//function to create sentence based on number of different letter grades most common
const printMostCommon = function () {
	if (mostCommon.length > 1) {
		return sentence.concat(
			`The most common letter grades were ${mostCommon.join(" and ")}.`
		);
	} else if (mostCommon.length === 1) {
		return sentence.concat(
			`The most common letter grade was ${mostCommon[0]}.`
		);
	}
};
console.log(printMostCommon());
//calculate average
const findAverage = (arr) => {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum = sum + arr[i];
	}
	return sum / arr.length;
};
//save average to variable for readability and round to 2 decimal places
let average = findAverage(grades).toFixed(2);

//print average to screen
console.log(`The average grade in class was ${average}%`);

//declare catchall
let cheer = [];

//iterate and push to catchall
for (let i = 2; i < 10; i++) {
	if (i < 8 && i % 2 === 0) {
		cheer.push(i);
	} else if (i >= 8 && i % 2 === 0) {
		cheer.push(i, "Who do we appreciate?!");
	}
}

//join array into a string
console.log(cheer.join(" "));

const sentenceArray = [
	"the",
	"cow",
	"danced",
	"through",
	"the",
	"trees",
	"in",
	"the",
	"light",
	"of",
	"the",
	"moon",
];

// declare catchall array
let interruptingCow = [];
//iterate through provided array and push to catchall
for (i = 0; i < sentenceArray.length; i++) {
	if (i % 3 === 0 && i !== 0) {
		interruptingCow.push("MOOOOOO", sentenceArray[i]);
	} else {
		interruptingCow.push(sentenceArray[i]);
	}
}
//join catchall into a string
console.log(interruptingCow.join(" "));

//provided object
const beatles = {
	albums: [
		"Abbey Road",
		"Sgt Peppers Lonely Heart's Club Band",
		"Revolver",
		"Magical Mystery Tour",
	],
	history: {
		formed: 1960,
		disbanded: 1970,
	},
	members: [
		{
			name: "George Harrison",
			birth: 1943,
			death: 2001,
		},
		{
			name: "Paul McCartney",
			birth: 1942,
			death: null,
		},
		{
			name: "John Lennon",
			birth: 1940,
			death: 1980,
		},
		{
			name: "Ringo Starr",
			birth: 1940,
			death: null,
		},
	],
};

//modify object with more information
let george = beatles.members[0];
let paul = beatles.members[1];
let john = beatles.members[2];
let ringo = beatles.members[3];
let albums = beatles.albums;
albums.push("The White Album", "A Hard Day's Night");

george.joinedBeatles = 1960;
george.leftBeatles = 1969;
george.mostContributed = [albums[4], albums[0]];

paul.joinedBeatles = 1960;
paul.leftBeatles = 1970;
paul.mostContributed = [albums[4], albums[1]];

john.joinedBeatles = 1960;
john.leftBeatles = 1969;
john.mostContributed = [albums[4], albums[5]];

ringo.joinedBeatles = 1962;
ringo.leftBeatles = 1968;
ringo.mostContributed = [albums[0], albums[4]];
//iterate through object and log information to the console
beatles.members.forEach((member) => {
	console.log(
		`${member.name} was in the Beatles from ${member.joinedBeatles} to ${
			member.leftBeatles
		}. He was born in ${
			member.birth
		}. He contributed heavily to the ${member.mostContributed.join(
			" and "
		)} albums.`
	);
});
