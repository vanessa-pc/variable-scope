let scope = "global";

function printScopeExample() {
  let scope = "function inside global";
  for (let i = 1; i <= 2; i++) {
    let scope = "loop inside function inside global";
    console.log("my scope is", scope);
  }
  console.log("my scope is", scope);
}

printScopeExample();
console.log("my scope is", scope);