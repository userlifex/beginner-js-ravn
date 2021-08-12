let Bunny = {
  type: undefined,
  talk(message) {
    console.log(`This ${this.type} bunny says ${message}`);
  },
};

let bugs = Object.create(Bunny);
//console.log(Bunny)
bugs.type = "anoying";
bugs.talk("hola");
bugs.name = "lonny";
//console.log(Object.getPrototypeOf(bugs).toString());
//console.log(bugs.__proto__)
