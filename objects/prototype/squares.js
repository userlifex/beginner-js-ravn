function Rectangle(a,b) {
  this.a = a;
  this.b = b;

}

Rectangle.prototype.calcSide = function() {
  return this.a * this.b;
}

const rec = new Rectangle(1,2)

function Square(a){
  this.prototype = new Rectangle(a,a)
  this.a = a
}

const sq = Square(3)
console.log(sq.calcSide())
console.log(rec.calcSide())


