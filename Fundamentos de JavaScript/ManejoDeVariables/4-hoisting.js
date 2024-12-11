//Hoisting 

/* The code is declaring a variable `x`, assigning it a value of `10`, and then logging the value of
`x` to the console. This code demonstrates variable declaration and assignment in JavaScript. */
var x;
x = 10;
console.log(x);


/* The code `y = 20; console.log(y); var y;` is demonstrating hoisting in JavaScript. */
y = 20;
console.log(y);
var y;

/*The next code is a commented-out block of code in JavaScript. It is attempting to assign a value of `30` to a
variable `z`, log the value of `z` to the console, and then declare `z` using the `let` keyword.
However, this code will result in a ReferenceError because the variable `z` is being used before it
is declared due to the nature of block-scoped variables with `let`. */
/*
z = 30;
console.log(z);
let z;
*/

