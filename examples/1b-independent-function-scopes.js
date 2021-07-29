"use strict";

const commonOuterScope = "sand";

function printWithPrefix() {
  console.log('inside scope of function 1');

  const prefix = "quick";
  console.log("printing with prefix:", `${prefix}${commonOuterScope}`);
  console.log('trying to access prefix:', `${prefix}${commonOuterScope}`)
}


function printWithSuffix() {
  console.log("inside scope of function 2");

  const suffix = "castle";
  console.log('printing with suffix:', `${commonOuterScope}${suffix}`);
  console.log("trying to access suffix:", `${commonOuterScope}${suffix}`);
}

printWithPrefix();
console.log('\n'); // print a new line character
printWithSuffix();