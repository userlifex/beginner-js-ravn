//const zelda = {
//name: 'zelda',
//};

//zelda.saludar = function () {
//console.log(`hello ${this.name}`);
//};

//zelda.greet = () => {
//console.log(`hello ${this.name}`);
//};

////zelda.saludar();
//zelda.greet()
//function Hero(name) {
//const hero = {
//name,
//greet() {
//console.log(`hello ${this.name}`);
//},
//};
//return hero;
//}

//zelda = Hero('zelda')
//link = Hero('link')

//zelda.greet()
//link.greet()

function Dog(name, age) {
  this.name = name;
  this.age = age;
  this.talk = function () {
    console.log(`this dogs call ${this.name} says wof!`);
  };
}

Dog.prototype.color = 'brown'
Dog.prototype.tell = function(){
  console.log(this)
}

const bobby = new Dog('bobby', 12)
bobby.__proto__.color = 'red'

console.log(Dog)
console.log(Dog.tell)
//console.log(bobby)


//const ob = {
  //name : 'john',
  //lastname: 'smith'

//}

//console.log(ob)
