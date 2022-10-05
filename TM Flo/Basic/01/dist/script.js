// program to generate a multiplication table
// take input from the user
var number = parseInt(prompt('Enter a number to multiply with: '));
//creating a multiplication table
for (var i = 1; i <= 10; i++) {
    // multiply i with number
    var result = i * number;
    // display the result
    console.log(number + " * " + i + " = " + result);

}
