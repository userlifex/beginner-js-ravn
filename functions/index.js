'use strict';

//console.log(this)
function hello(self) {
  console.log(self.toString());
  //this = self
  (function (...args) {
    console.log(args);
    console.log(this);
  })('john', 1, 2, 3);

  const greet = () => {
    console.log('greet', this);
  };

  greet();
}

//greet();
hello(this);
//
//
//let num = 1
//num = 'plane'
//console.log(num)
console.clear()

const ob = {
  a: 4,
  b: 5,
  sum(){
    if (this.a === this.b) console.log('are equal')
    function calculate(){
      return this.a + this.b;
    }
    //const calculate = () => this.a + this.b

    //return calculate.bind(this)()
    return calculate.call(this)

  }
}

ob.a = 5
console.log(ob.sum())
//g
