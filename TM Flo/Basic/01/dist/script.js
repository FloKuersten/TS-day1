// program to generate a multiplication table
// take input from the user
var number = parseInt(prompt('What multiplication table would you like to see enter a number: '));
//creating a multiplication table
for (var i = 1; i <= 10; i++) {
    // multiply i with number
    var result = i * number;
    // display the result
    console.log(number + " * " + i + " = " + result);
}
