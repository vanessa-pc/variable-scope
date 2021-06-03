"use strict";

let commonOuterScope = "sand";
let prefix = "mix";
let suffix = "wich";

function printWithPrefix() {
  console.log('inside scope of function 1');

  let prefix = "quick";
  console.log("printing with prefix:", `${prefix}${commonOuterScope}`);

  console.log("trying to access suffix:", `${commonOuterScope}${suffix}`);
}


function printWithSuffix() {
  console.log("inside scope of function 2");

  let suffix = "castle";
  console.log('printing with suffix:', `${commonOuterScope}${suffix}`);

  console.log('trying to access prefix:', `${prefix}${commonOuterScope}`)
}

printWithPrefix();
console.log("\n");
printWithSuffix();
console.log("\nback in global scope")
console.log("my prefix and suffix:", prefix, commonOuterScope, suffix)