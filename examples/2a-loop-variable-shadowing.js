"use strict";

let myCharacter = '!';

for (let count = 1; count <= 5; count++) {
  // declaring a new variable with narrower scope
  let myCharacter = '?';
  let myString = myCharacter.repeat(count);
  console.log(myString);
}

// but back in global scope, still only have reference to global myCharacter
console.log('my character is:', myCharacter);