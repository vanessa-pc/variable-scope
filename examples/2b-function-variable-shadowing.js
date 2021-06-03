"use strict";

const myWord = "sand";
const suffix = "wich";

function printWithSuffix() {
  console.log("inside function scope");

  const suffix = "castle";
  console.log('printing with suffix:', `${myWord}${suffix}`);
}

printWithSuffix();
console.log("\nback in global scope")
console.log("printing with suffix:", `${myWord}${suffix}`)