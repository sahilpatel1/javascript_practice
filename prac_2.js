//intialize these three variables
var a = 5;
var b = 10;
var c = "I am a";

// Do not change code below this line
a += 1;
b += 5;
c += " String !";

console.log(a);
console.log(b);
console.log(c);

//Javascript is a case sensitive language

var sum = 10 + 10;
console.log(sum)

var difference = 45 - 33;
console.log(difference)

var product = 8 * 80;
console.log(product)

var quotient = 66/ 33;
console.log(quotient)

var myVar = 88;

//short notation to increment a number by 1
myVar++

console.log(myVar)

var myVar_2 = 90;

//short notation to decrement a number by 1
myVar_2--

console.log(myVar_2)

//decimal numbers or sometimes referred to as floating point values
var ourDecimal = 5.7

//only change code below this line
var myDecimal = 0.009

console.log(typeof(ourDecimal))
console.log(typeof(myDecimal))

//multiply numbers
var product = 2.0 * 2.5
console.log(product);

quotient = 4.4 / 2.0;
console.log(quotient)

//finding a remainder
var remainder = 11 % 3
console.log(remainder)

var a = 11;
var b = 9;
var c = 3;

//subtracting the short way
a -= 6; //subtract 6 from the current value of a
b -= 15; //subtract 15 from the current value of b
c -= 1; // subtract 1 form the current value of c

var l = [a , b , c]

for(let i = 0; i < l.length; i++)
{
    console.log(l[i]);
}

var a = 5
var b = 12
var c = 4.6

//multiply shortcut
a *= 5;
b *= 3;
c *= 10;

console.log(a);
console.log(b);
console.log(c);

//divide shortcut
var a = 48;
var b = 108
var c = 33;

a /= 12
b /= 4
c /= 11

console.log(a);
console.log(b);
console.log(c);

//string variables
var firstName = "Alan"
var lastName = "Turing"

var myFirstName = "Sahil"
var myLastName = "Patel"

//escaping literal quotes

// use the \ <-- "escape character"
var myStr = "I am a \"double quoted\" string inside \"double quotes\" "


//a string can be surrounded by single or double quotes in javascript
var mystr =  '<a href = "http://www.example.com" target="_blank">Link </a> '

/*
escape sequences in the string

Code output
\' - single quote
\" - double quote
\\ - backslash
\n - newline
\r - carriage return
\t - tab
\b - backspace
\f - form feed

*/

var outStr = "I come first. " + "I come second";
var myStr = "This is the start. " + "This is the end";

console.log(myStr)

var myStr = "This is the first sentence. "
myStr += "This is the second sentence"

console.log(myStr)

//constructing strings with variables

var myName = "Sahil"
var myStr = "My name is " + myName + " and I am well!"

var someAdjective = "worthwhile"
var myStr = "Learning to code is "
myStr += someAdjective

console.log(myStr)

//find a length of string
var firstNameLength = 0
var firstName = "Ada"

firstNameLength = firstName.length

var lastNameLength = 0
var lastName = "Lovelace"

lastNameLength = lastName.length
console.log("Word " + "\"" + lastName + "\"" + " has " + lastNameLength + " characters")

//bracket notation to get a character using an index from a string
var firstName = "Sahil"


var firstLetterOfLastName = "";
var lastName = "LoveLace";

firstLetterOfLastName = lastName[0]
console.log(firstLetterOfLastName)

//printing one letter at a time
for(let i = 0; i < firstName.length; i++){
    console.log(...firstName[i])
}

