"use strict";

console.log("Start of programme");

const healthyFoods = ['fruit', 'veg'];
const junkFoods = ['chocolate', 'cake', 'poison'];

for (let healthyItem of healthyFoods) {
  console.log(`${healthyItem} is normally considered a healthy food`);
}

for (let junkItem of junkFoods) {
  console.log(`${junkItem} is NOT normally considered a healthy food`);
  // below will error. Why?
  console.log(`...so, swap it for ${healthyItem}!`);
}

console.log("Reached the end of my programme!");