"use strict";

const commonOuterScope = "sand";

function printWithPrefix() {
  console.log('inside scope of function 1');

  const prefix = "quick";
  console.log("printing with prefix:", `${prefix}${commonOuterScope}`);

  // below line will error, comment out to fix
  console.log("trying to access suffix:", `${commonOuterScope}${suffix}`);
}


function printWithSuffix() {
  console.log("inside scope of function 2");

  const suffix = "castle";
  console.log('printing with suffix:', `${commonOuterScope}${suffix}`);

  // below line will error, comment out to fix
  console.log('trying to access prefix:', `${prefix}${commonOuterScope}`)
}

printWithPrefix();
console.log('\n'); // print a new line character
printWithSuffix();