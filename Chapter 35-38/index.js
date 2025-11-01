// Function 

// Question 1
// Write a function that displays current date & time in your browser.

// function currentTime(){
//     var date= new Date();

//     // document.getElementById("time").innerHTML=date
//     document.write(date + "<br><br>");
// }

// currentTime();

// Question 2
// Write a function that takes first & last name and then it greets the user using his full name.

// function greetUser(){
//     var firstName=prompt("Enter your first name");
//     var lastName=prompt("Enter your last Name");
//     document.write("Hello! " + firstName + " " + lastName);

// }

// greetUser();

// Question 3
// Write a function that adds two numbers (input by user) and returns the sum of two numbers.

// function addNumbers(){
//     var firstNumber= +prompt("Enter first Number");
//     var lastNumber= +prompt("Enter second Number");
//     var result=firstNumber+lastNumber;
//     return result;
// }

// console.log(addNumbers());
// var sum= addNumbers();
// alert("The total sum is " + sum);

// Question 4
// Calculator:
// Write a function that takes three arguments num1, num2 & operator & compute 
// the desired operation. Return and show the desired result in your browser.

// function Calculator(num1, num2 , operator){
//     var num1= +prompt("Enter first Number");
//     var num2= +prompt("Enter second Number");
//     var operator= prompt("Enter any operator /n 1. + /n 2. - /n 3. * /n 4. /");
//     var result;

//     if (operator === "+"){
//        result = num1 + num2 ;
//     }
//     else if(operator === "-"){
//        result = num1 - num2 ;
//     }
//     else if(operator === "*"){
//        result = num1 * num2 ;
//     }
//     else if(operator === "/"){
//        result = num1 / num2 ;
//     }
//     else{
//         result= "Invalid Operator!";
//     }
//     return result;
//     alert("Your answer is this " + result);
// }

// console.log(Calculator());
// Calculator();

// Question 5
// Write a function that squares its argument.

// function square(number){
//     var result= number*number;
//     return result;
// }

// console.log(square(2));

// Question 6
// Write a function that computes factorial of a number.

// function factorial(n) {
//     if (n < 0) {
//         return "Factorial is not defined for negative numbers.";
//     }
//     let result = 1;
//     for (let i = 1; i <= n; i++) {
//         result *= i;
//     }
//     return result;
// }

// console.log(factorial(5)); 
// console.log(factorial(0)); 

// Question 7
// Write a function that take start and end number as inputs & display counting in your browser.

// function counting(){
//     var start=  +prompt("Enter number to count down from");
//     var end= +prompt("Enter how far to count");
//     for (var i = start; i <= end; i++) {
//         document.write(i + " ");
//     }
// }

// console.log(counting());

// Question 8
// Write a nested function that computes hypotenuse of a right angle triangle.
// Hypotenuse2 = Base2 + Perpendicular2
// Take base and perpendicular as inputs.
// Outer function : calculateHypotenuse()
// Inner function: calculateSquare()

// function calculateHypotenuse(){
//     var base= +prompt("Ënter base");
//     var perp= +prompt("Ënter perpendicular");

//     function calculateSquare(a){
//             return a * a;
//     }
//     var hypoSquare = calculateSquare(base)+ calculateSquare(perp);
//     var hypotenuse =Math.sqrt(hypoSquare);

//     console.log("Hypotenuse of a right angle triangle :" + hypotenuse);

// }

// Question 9 
// Write a function that calculates the area of a rectangle.
// A = width * height
// Pass width and height in following manner:
// i. Arguments as value

// function areaRectangle(width, height){
//     return width*height;

// }
// console.log(areaRectangle(20 , 1));

// ii. Arguments as variables

// var width = 15;
// var height = 8;
// console.log("Area: " + areaRectangle(width, height));

// Question 10
// Write a JavaScript function that checks whether a passed string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam.

// function isPalindrome(str) {
//     str = str.toLowerCase().replace(/[^a-z0-9]/g, "");

//     var reversed = str.split("").reverse().join("");

//     return str === reversed;
// }

// console.log(isPalindrome("madam"));        
// console.log(isPalindrome("hello"));        
// console.log(isPalindrome("racecar"));
// console.log(isPalindrome("A man a plan a canal Panama"));

// Question 11 
// Write a JavaScript function that accepts a string as a
// parameter and converts the first letter of each word of the
// string in upper case.
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'

// function capitalize(str) {
//     var words = str.split(" ");
//     var result = "";

//     for (var i = 0; i < words.length; i++) {
//         var word = words[i];
//         if (word.length > 0) {
//             var capitalized = word[0].toUpperCase() + word.slice(1).toLowerCase();
//             result += capitalized + " ";
//         }
//     }

//     return result.trim();
// }

// console.log(capitalize("hello anoosha ")); 

// Question 12
// Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
// EXAMPLE STRING : 'Web Development Tutorial'
// EXPECTED OUTPUT : 'Development

function longestString(string){
    var words= string.split(" ");
    var longestWord="";
    
    for(var i=0; i< words.length; i++){
        if (words[i].length > longestWord.length){
            longestWord = words[i];
        }
    }

    return longestWord;
}

console.log(longestString("Web Development Tutorial")); 

// Question 13
// Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of
// occurrences of the specified letter within the string. 
// Sample arguments : 'JSResourceS.com', 'o'

function occurrences(str, letter){
    var count =0;

    for (var i=0; i< str.length; i++){
        if (str[i].toLowerCase() === letter.toLowerCase()){
            count++;
        }
    }

    return count;
}

console.log(occurrences("JSResourceS.com", "o"));

// Question 14
// The Geometrizer
// Create 2 functions that calculate properties of a circle, using the definitions here.
// Create a function called calcCircumference:
// • Pass the radius to the function.
// • Calculate the circumference based on the radius, and output
// "The circumference is NN".
// Create a function called calcArea:
// • Pass the radius to the function.
// • Calculate the area based on the radius, and output "The area
// is NN".
// Circumference of circle = 2πr
// Area of circle = πr2

function calcCircumference(radius){
    var circum= 2*(3.142)*radius;
    return circum;
}

var circumference= calcCircumference(2);
console.log("The circumference is " + circumference);

function calcArea(radius){
    var area = 3.142*(radius *radius);
    return area ;
}

var areaCircle= calcArea(2);
console.log("The area is "+ areaCircle);
