let message = "Hello, global scope!";

function printScopeExample() {
  let message = "Hello, function scope inside global scope!";
  for (let i = 0; i <= 2; i++) {
    let message =
      "Hello, loop scope inside function scope inside global scope!";
    console.log(message);
  }
  console.log(message);
}

printScopeExample();
console.log(message);