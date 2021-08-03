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
console.log(name && "john");
console.log(name && "john");

let len = 10;

for (let i = 1; i <= len; i++) {
  //console.log("#".repeat(i));
}

const fizzbuzz = (num) => {
  let result = "";
  if (num % 3 === 0) result += "Fizz";
  if (num % 5 === 0) result += "Buzz";
  return result;
};

function main() {
  for (let i = 1; i <= 100; i++) {
    console.log(fizzbuzz(i) || i);
  }
}

function chess(n) {
  let tab = " #".repeat(n ** 2)

  let aumento = n % 2 === 0 ? 1 : 0;

  for (let i = 0; i < tab.length / 2; i+=n) {
    console.log(tab.substr(i + aumento,n))
  }
  
}

