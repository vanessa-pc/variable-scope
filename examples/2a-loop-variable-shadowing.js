"use strict";

const punctuationChar = '!';

for (let count = 1; count <= 2; count++) {
  // declaring a new variable with narrower scope
  let punctuationChar = "??"
  console.log(`I am in loop scope${punctuationChar}`);
}

// but back in global scope, still only have reference to global punctuationChar
console.log(`I am in global scope${punctuationChar}`);