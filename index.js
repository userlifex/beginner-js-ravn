//let num = Infinity;
//
////console.log(num + 12)
//let div = num / num;
//console.log(div)
//console.log(1 + 1 == 2 && 10 * 10 > 50)
//let value = 5 * null;
//console.log(value)
//console.log(null === undefined);
let name = null;
//console.log(name && "john");
//console.log(name && "john");

let len = 10;

for (let i = 1; i <= len; i++) {
  //console.log("#".repeat(i));
}

const fizzbuzz = (num) => {
  let result = '';
  if (num % 3 === 0) result += 'Fizz';
  if (num % 5 === 0) result += 'Buzz';
  return result;
};

function main() {
  for (let i = 1; i <= 100; i++) {
    console.log(fizzbuzz(i) || i);
  }
}

function chess(n) {
  let tab = ' #'.repeat(n ** 2);

  let aumento = n % 2 === 0 ? 1 : 0;

  for (let i = 0; i < tab.length / 2; i += n) {
    console.log(tab.substr(i + aumento, n));
  }
}

function chicken() {
  console.log('egg');
  return egg();
}

function egg() {
  console.log('chickenkk');
  return chicken();
}

//egg();
//this calls an infinte function
const a = 'hey';
function global() {
  const b = 'que';

  function local() {
    const c = 'tal';
    return a + b + c;
  }
  return local;
}

//console.log(global()())
//global()

//const clousure = global();

//console.log(clousure())

const contador = (function () {
  let _counter = 0;
  function decrementar() {
    _counter--;
  }
  function incrementar() {
    _counter++;
  }
  function valor() {
    return _counter;
  }

  return { incrementar, decrementar, valor };
})();

const animals = [
  {
    name: 'pigs',
    total: 12,
  },
  {
    name: 'cowns',
    total: 13,
  },
];
const printFarmInv = (animals) => {
  animals.forEach((animal) =>
    console.log(`${animal.name} ${zeeroPad(animal.total, 3)}`)
  );
};

const zeeroPad = (num, digits) => {
  return ('0'.repeat(digits) + num).substr(-digits);
};

//printFarmInv(animals)
//
const min = (nums) => nums.reduce((prev, cur) => (prev < cur ? prev : cur));
const max = (nums) => nums.reduce((prev, cur) => (prev > cur ? prev : cur));

const isEven = (num) => {
  if (num === 1) return false;
  if (num === 0) return true;
  return isEven(num - 2);
};

const countLetters = (text, letter = 'F') => {
  return text
    .split('')
    .reduce((prev, curr) => (curr === letter ? ++prev : prev), 0);
};

const myarr = [1, 2, 3, 4, 5, 6, 7];
//console.log(myarr["length"])

//multiple params in a function

const range = (min, max, step = 1) => {
  let arr = [];
  let stepAbs = Math.abs(step);
  let minAbs = Math.min(min, max);
  let maxAbs = Math.max(min, max);

  while (minAbs <= maxAbs) {
    arr.push(minAbs);
    minAbs += stepAbs;
  }

  return step < 0 ? arr.reverse() : arr;
};

const sum = (numbers) => numbers.reduce((prev, cur) => prev + cur);

const reveseNewArray = (array) => {
  let newArray = [];
  for (item of array) {
    newArray.unshift(item);
  }
  return newArray;
};

const reverseArray = (array) => {
  let lastIndex = array.length - 1;
  for (let i = 0; i < array.length / 2; i++) {
    let aux = array[i];
    array[i] = array[lastIndex];
    array[lastIndex] = aux;
    lastIndex -= i;
  }
};

const generateList = (array) => {
  let list = null;
  for (let i = array.length - 1; i >= 0; i--) {
    list = {
      value: array[i],
      rest: list,
    };
  }
  console.log(list);
};

let x = [1, 2, 7];
generateList(x);

//REVISAR COMPARACION PROFUNDA
