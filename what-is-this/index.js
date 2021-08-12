//console.log(this);

//const person = {
//name: 'john',
//whatisitsname() {
//console.log(this);
//},
//};

//console.log(person.name);
//console.log(person.whatisitsname());
//
function Person(first, last) {
  this.first = first;
  this.last = last;
  this.tellme = function () {
    console.log(this);
  };
  //console.log(this);
  //return this;
}

Person.prototype.sayhello = function () {
  //console.log(this)
  console.group('greetin')
  console.log(`hello from ${this.first} ${this.last}`);
  console.groupEnd()
  console.log(this);
};

const john = new Person('john', 'marchena');
const hilda = new Person('Hilda', 'Lucho');
john.sayhello();
hilda.sayhello();
//john.tellme()
