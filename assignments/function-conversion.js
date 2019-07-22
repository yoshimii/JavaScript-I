// Take the commented ES5 syntax and convert it to ES6 arrow Syntax

let myFunction = function () {
console.log("Function was invoked!");
};
myFunction();

myArrowFunction = () => console.log("Arrow function invoked!");

myArrowFunction();
/**********************************************************************/
let anotherFunction = function (param) {
  return param;
};
anotherFunction("Example");
console.log(anotherFunction("Example"));

let anotherArrowFunction = param => param;

console.log(anotherArrowFunction("ArrowExample"));
/**********************************************************************/
let add = function (param1, param2) {
  return param1 + param2;
};
add(1,2);


let addArrow = (param1, param2) => (param1+param2);
addArrow(2,4);
console.log(addArrow(2,4));
/**********************************************************************/
let subtract = function (param1, param2) {
  return param1 - param2;
};
subtract(1,2);

let subtractArrow = (param1,param2) => (param1-param2);
console.log(subtractArrow(2,4);)
/**********************************************************************/
// Stretch

// exampleArray = [1,2,3,4];
// const triple = exampleArray.map(function (num) {
//   return num * 3;
// });
// console.log(triple);