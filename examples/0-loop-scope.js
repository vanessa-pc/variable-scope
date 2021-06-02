"use strict";

let myString = 'testing out variable scope';
let words = myString.split(' ');

for (let word of words) {
  let capitalisedWord = word.toUpperCase();
  console.log('I shout:', capitalisedWord);
}

console.log('-------'); // separator to make output clearer

console.log("can I access globally-scoped variable myString here? yes!", myString);
console.log("can I access globally-scoped variable words here? yes!", words);

console.log('-------'); // separator to make output clearer

// below line will error - comment out to fix
console.log("can I access loop-scoped variables word here? no...", word);
console.log("can I access loop-scoped variables capitalisedWord here? no...", capitalisedWord);


console.log("Reached the end of my programme!");