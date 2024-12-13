//Arithmetic operators

/* The line `let a, b, c, d, e, f;` is declaring multiple variables `a`, `b`, `c`, `d`, `e`, and `f` in
JavaScript using the `let` keyword. These variables are being declared but not initialized with any
values at this point. */
let a, b, c, d, e, f;

/* The code `a = 3 + 4;` is performing an arithmetic operation where the values 3 and 4 are added
together. The result of this addition, which is 7, is then assigned to the variable `a`. */
a = 3+4;
console.log(a);

/* The code `b = 6-2; console.log(b);` is performing an arithmetic operation where the value of `b` is
calculated by subtracting 2 from 6. So, 6 minus 2 equals 4. After this calculation, the value of `b`
becomes 4, and then it is logged to the console using `console.log(b);`. */
b = 6-2;
console.log(b);

/* The code `c = a*2; console.log(c);` is performing an arithmetic operation where the value of `c` is
calculated by multiplying the value stored in variable `a` by 2. */
c = a*2;
console.log(c);

/* The code `d = b/2.5` is performing a division operation where the value of variable `b` is divided
by 2.5. In this case, since `b` is 4, the result of `b/2.5` would be `4/2.5` which equals 1.6. This
result is then assigned to the variable `d`. */
d = b/2.5
console.log(d);
console.log(typeof d);

/* The code `f = 9%2; console.log(f);` is performing a modulo operation in JavaScript. */
f = 9%2;
console.log(f);

/* The code `e = 2**3; console.log(e);` is using the exponentiation operator `**` in JavaScript. In
this case, `2**3` means 2 raised to the power of 3, which is equivalent to 2 * 2 * 2, resulting in
8. So, the value 8 is assigned to the variable `e`, and then it is logged to the console using
`console.log(e);`. (ES2016 - ECMAScript 2016) */
e = 2**3;
console.log(e);

/* The code `e = Math.pow(2,3); console.log(e);` is using the `Math.pow()` method in JavaScript to
calculate the result of raising the base (2 in this case) to the exponent (3 in this case). */
e = Math.pow(2,3);
console.log(e);