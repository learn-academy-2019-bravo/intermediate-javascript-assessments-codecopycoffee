// Intermediate Javascript Assessments

// 1. Write an arrow function that takes one argument of type array and returns the contents of that array in reverse order.

var originalArray = [1, 2, 3, 4, 5, 6, 7]

flipArray = (array) => {
	return array.reverse()
}


// 2. Given the object below, complete the console.log to find specific information:

var bicycle = {
	type: "Roadbike",
	gear: ["comfy seat", "cool handlebars", "vintage bell", "toe clips"],
	wheels: {
		count: 2,
		specs: ["road tires", "AX-7563", "80-115 PSI"],
		brand: "Trek"
	}
}

// Log the type of bicycle:
console.log(bicycle.type)

// Log the bell:
console.log(bicycle.gear[2])

// Log the PSI:
console.log(bicycle.specs[2])


// 3. Write a function called letterCounter that logs the number of times the letter "l" appears in ourString.

var ourString = "Hello Learn Students!"

var letterCounter = (string) => {
	var splitString = string.split("")
  var newarr = []
  for (let i=0; i<splitString.length; i++) {
    if ((splitString[i] === "l") || (splitString[i] === "L")) {
      newarr.push(splitString[i])
    }
  }
  return newarr.length
}


// 4. Write a function called getFib that returns the first 10 numbers of the Fibonacci sequence in an array. [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]


//I can't figure it out. I googled some solutions but I don't understand them.


//5. Write a function called oddChecker that takes in the fullArr and uses a for loop to return a new array of only odd numbers. Copy and paste your code and refactor using ES6 syntax.

var fullArr = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]

var oddChecker = (array) => {
	oddsOnly = []
	for (let i=0; i<array.length; i++) {
    newNum = parseInt(array[i])
		if ((newNum % 2 != 0) && (newNum != NaN)) {
			oddsOnly.push(newNum)
		}
	}
  finalArray = oddsOnly.filter(value => !Number.isNaN(value))
  return finalArray
}
