"use strict";

let commonOuterScope = "sand";

function printWithPrefix() {
  console.log('inside scope of function 1');

  let prefix = "quick";
  console.log("printing with prefix:", `${prefix}${commonOuterScope}`);

  // below line will error, comment out to fix
  console.log("trying to access suffix:", `${commonOuterScope}${suffix}`);
}


function printWithSuffix() {
  console.log("inside scope of function 2");

  let suffix = "castle";
  console.log('printing with suffix:', `${commonOuterScope}${suffix}`);

  // below line will error, comment out to fix
  console.log('trying to access prefix:', `${prefix}${commonOuterScope}`)
}

printWithPrefix();
console.log('\nseparator\n');
printWithSuffix();