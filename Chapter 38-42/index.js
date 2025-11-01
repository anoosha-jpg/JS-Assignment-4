// Functions, Switch statement, While & and Do While Loops

// Question 1
// Write a custom function power ( a, b ), to calculate the value of a raised to b.

function power(a, b) {
  var result = 1;
  var i = 1;

  while (i <= b) {
    result *= a;
    i++;
  }

  return result;
}

console.log(power(2, 3));

// Question 2
// Any year is entered through the keyboard. Write a function to determine whether the year is a leap year or not. 
// Leap years ..., 2012, 2016, 2020, …
 
function isLeapYear(year) {
  var condition = false;

  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    condition = true;
  }

  switch (condition) {
    case true:
      return `${year} is a Leap Year`;
    case false:
      return `${year} is not a Leap Year`;
  }
}
console.log(isLeapYear(2024)); 
console.log(isLeapYear(2023));

// Question 3
// If the lengths of the sides of a triangle are denoted by a, b, and , then area of triangle is given by
// area = S(S − a)(S − b)(S − c)
// where, S = ( a + b + c ) / 2
// Calculate area of triangle using 2 functions

function semiPerimeter(a, b, c) {
  return (a + b + c) / 2;
}

function areaOfTriangle(a, b, c) {
  var s = semiPerimeter(a, b, c);
  var area;
  var i = 0;

  while (i < 1) {
    area = s * (s - a) * (s - b) * (s - c);
    i++;
  }

  return area;
}
console.log(areaOfTriangle(2, 3, 4));

// Question 4
// Write a function that receives marks received by a student in 3 subjects and returns the 
// average and percentage of these marks .there should be 3 functions one is the mainFunction
// and other are for average and percentage. Call those functions from mainFunction and display result in mainFunction.

function average(sub1, sub2, sub3) {
  return (sub1 + sub2 + sub3) / 3;
}

function percentage(sub1, sub2, sub3) {
  var total = sub1 + sub2 + sub3;
  return (total / 300) * 100;
}

function mainFunction() {
  var sub1 = parseFloat(prompt("Enter marks of Subject 1:"));
  var sub2 = parseFloat(prompt("Enter marks of Subject 2:"));
  var sub3 = parseFloat(prompt("Enter marks of Subject 3:"));

  var avg = average(sub1, sub2, sub3);
  var per = percentage(sub1, sub2, sub3);

  switch (true) {
    case true:
      console.log(`Average Marks: ${avg}`);
      console.log(`Percentage: ${per}%`);
      break;
  }
}
mainFunction();

// Question 5
// You have learned the function indexOf. Code your own custom function that will
// perform the same functionality. You can code for single character as of now.

function customIndexOf(text, char) {
  for (var i = 0; i < text.length; i++) {
    switch (text[i]) {
      case char:
        return i;
    }
  }
  return -1;
}

console.log(customIndexOf("Hello", "o")); 
console.log(customIndexOf("Hello", "z"));

// Question 6
// Write a function to delete all vowels from a sentence. Assume that the sentence is not more than 25 characters long.

function deleteVowels(sentence) {
  var result = "";
  var i = 0;

  while (i < sentence.length) {
    var char = sentence[i].toLowerCase();
    if (char !== "a" && char !== "e" && char !== "i" && char !== "o" && char !== "u") {
      result += sentence[i];
    }
    i++;
  }

  return result;
}

console.log(deleteVowels("Anoosha Khan"));

// Question 7
// Write a function with switch statement to count the number of occurrences of any two vowels in succession in a line of text.
// “Pleases read this application and give me gratuity” Such occurrences are ea, ea, ui.

function countVowelPairs(text) {
  text = text.toLowerCase();
  var count = 0;

  for (var i = 0; i < text.length - 1; i++) {
    var first = text[i];
    var second = text[i + 1];

    switch (true) {
      case (
        (first === "a" || first === "e" || first === "i" || first === "o" || first === "u") &&
        (second === "a" || second === "e" || second === "i" || second === "o" || second === "u")
      ):
        count++;
        break;
    }
  }

  return count;
}

var line = "Pleases read this application and give me gratuity";
console.log("Number of vowel pairs:", countVowelPairs(line));

// Question 8
// The distance between two cities (in km.) is input through the keyboard. Write four functions to convert and print this distance in meters, feet, inches and centimeters.

function toMeters(km) {
  return km * 1000;
}

function toFeet(km) {
  return km * 3280.84;
}

function toInches(km) {
  return km * 39370.1;
}

function toCentimeters(km) {
  return km * 100000;
}

function mainFunction() {
  var km = parseFloat(prompt("Enter distance between two cities (in km):"));
  var choice = prompt(
    "Choose conversion:\n1. Meters\n2. Feet\n3. Inches\n4. Centimeters\n (write 1,2,3,4)"
  );

  switch (choice) {
    case "1":
      console.log(`Distance in meters: ${toMeters(km)} m`);
      break;
    case "2":
      console.log(`Distance in feet: ${toFeet(km)} ft`);
      break;
    case "3":
      console.log(`Distance in inches: ${toInches(km)} inch`);
      break;
    case "4":
      console.log(`Distance in centimeters: ${toCentimeters(km)} cm`);
      break;
    default:
      console.log("Invalid choice!");
  }
}
mainFunction();

// Question 9
// Write a program to calculate overtime pay of employees. Overtime is paid at the rate of Rs. 12.00 per hour for every hour worked above 40 hours. Assume that employees do not work for fractional part of an hour.

function calculateOvertime(hoursWorked) {
  var overtimeHours, overtimePay;

  switch (true) {
    case (hoursWorked > 40):
      overtimeHours = hoursWorked - 40;
      overtimePay = overtimeHours * 12;
      console.log(`Overtime Hours: ${overtimeHours}`);
      console.log(`Overtime Pay: Rs. ${overtimePay}`);
      break;

    case (hoursWorked <= 40):
      console.log("No overtime pay. You worked 40 hours or less.");
      break;

    default:
      console.log("Invalid input!");
  }
}

var hours = parseInt(prompt("Enter total hours worked by the employee:"));
calculateOvertime(hours);

// Question 10
// A cashier has currency notes of denominations 10, 50 and 100. If the amount to be withdrawn
// is input through the keyboard in hundreds, find the total number of currency notes of each denomination the cashier will have to give to the withdrawer.

function calculateNotes(amount) {
  var hundreds = 0, fifties = 0, tens = 0;

  switch (true) {
    case (amount >= 100):
      hundreds = Math.floor(amount / 100);
      amount = amount % 100;
    case (amount >= 50):
      fifties = Math.floor(amount / 50);
      amount = amount % 50;
    case (amount >= 10):
      tens = Math.floor(amount / 10);
      amount = amount % 10;
      break;
    default:
      console.log("Enter a valid amount in multiples of 10!");
      return;
  }

  console.log(`You will have ${hundreds} hundred notes, ${fifties} fifty notes, and ${tens} ten notes.`);
}

var amount = parseInt(prompt("Enter amount to withdraw:"));
calculateNotes(amount);
