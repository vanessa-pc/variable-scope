"use strict";

let myString = 'testing out variable scope';
let words = myString.split(' ');

// declaring a variable in the global scope
let shortestWord = words[0];

for (let word of words) {
  if (word.length < shortestWord.length) {
    // we still have access to the global scope variable
    shortestWord = word; // no let as we want to use the existing declaration
  }
}

// global scope variable can still be referenced here
console.log('shortest word:', shortestWord);