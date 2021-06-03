"use strict";

let myWord = "sand";
let suffix = "wich";

function printWithSuffix() {
  console.log("inside scope of function 2");

  let suffix = "castle";
  console.log('printing with suffix:', `${myWord}${suffix}`);
}

printWithSuffix();
console.log("\nback in global scope")
console.log("printing with suffix:", `${myWord}${suffix}`)