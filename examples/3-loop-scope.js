"use strict";

let myString = 'testing out variable scope';
let words = myString.split(' ');

for (let word of words) {
  let capitalisedWord = word.toUpperCase();
  console.log('I shout:', capitalisedWord);
}

// below lines will error - comment out to fix
console.log("can't access loop-scoped variables here", word);
console.log("can't access loop-scoped variables here", capitalisedWord);