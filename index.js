function foo() {
    return 'bar';
  }

  (function() { console.log("Hello world") })()

  let add = (parameter1, parameter2) => parameter1 + parameter2
add(2,3) //=> 5

let twoAdder = x => x + 2;
// is the same as
let twoAdder = (x) => x + 2;

let sum = (parameter1, parameter2) => {
  console.log(`Adding ${parameter1}`);
  console.log(`Adding ${parameter2}`);
  return parameter1 + parameter2;
}
sum(1,2) //=> 3

const nums = [1,2,3];
const squares = nums.map(x => x ** 2); //=> [1,4,9]
const doubles = nums.map(x => x * 2); //=> [2,4,6]

