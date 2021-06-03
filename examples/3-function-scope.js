'use strict'

let myOuterFruit = "apple";

function printStuffFromInnerScope() {
  let myInnerFruit = "pear";
  console.log('inside a function there is narrower scope, it can access myInnerFruit', myInnerFruit);
  console.log('...and things from the outer scope too, like myOuterFruit', myOuterFruit);
}

printStuffFromInnerScope();

console.log("outside a function, I can't access variables from its inner scope:", myInnerFruit); // causes an error! comment out this line to fix

console.log("outside a function, I can access variables from the general outer scope", myOuterFruit);