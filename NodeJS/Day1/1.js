/*Check Even or Odd
Write a program that takes a number as input and determines if it is even or odd.
(Condition: Do not use the modulo operator(%) or any built-in functions for the check, if possible.
Focus on bitwise operations or simple arithmetic logic.)*/

function is_even(value){
    return (value & 1) === 0;
}

function is_odd(value){
    return (value & 1) !== 0;
}

console.log("Is 99 Even ");
console.log(is_even(99));