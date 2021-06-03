"use strict";

let myString = 'testing out variable scope';
let words = myString.split(' ');

console.log('Entering my loop:');

for (let word of words) {
  let capitalisedWord = word.toUpperCase();
  console.log('I shout:', capitalisedWord);
}

console.log('Loop exited!')

// below will cause errors - comment out to fix
console.log("outside a loop, can I access word?", word);
console.log("outside a loop, can I access capitalisedWord?", capitalisedWord);

console.log("Reached the end of my programme!");