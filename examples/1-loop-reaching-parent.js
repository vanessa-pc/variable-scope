"use strict";

console.log("Start of programme");

let fruitArr = ['apple', 'grape', 'pear'];
let stringSeparator = '-- PLUS --';

for (let fruit of fruitArr) {
  console.log('In loop scope:', fruit);
  console.log('Also in loop scope:', stringSeparator);
}

console.log("Reached the end of my programme!");