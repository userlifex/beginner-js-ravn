class Rectangle {
  constructor(a, b) {
    //this.a = a;
    //this.b = b;

    function calcSide() {
      console.log(a * b);
    }

    function getA(){
      return a;
    }
    
    function getB(){
      return b;
    }

    return {
      calcSide,
      getA,
      getB
    };
  }

  //calcSide() {
  //console.log(this.a * this.b);
  //}
}

class Square extends Rectangle {
  constructor(a) {
    super(a, a);
    //this.a = a;
    //the instanceof squere have property b but in oop encaptulation that is not alowed
  }

  isSquare() {
    console.log(true);
  }
}

console.clear();
const square = new Square(12);
const rec = new Rectangle(2, 3);

//console.log(square.b);
//why this happend: prototype
//
//console.log(Object.getPrototypeOf(square));
//
square.calcSide();

rec.calcSide();

//console.log(square.getB())
function foo() {
  const ar = Array.from(arguments, (item) => item * 3);
  console.log(ar);
  //console.log(arguments)
}

//foo(1, 2, 3, 4, 's');
