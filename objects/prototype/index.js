const zelda = {
  name: 'zelda',
  greet: () => {
    console.log(this.toString());
  },

  hi2: function () {
    console.log(this);
  },

  hi() {
    console.log(this);
  },

  call(callback) {
    callback();
    console.log(this);

    const foo = () => {
      console.log(this);
    };
    function offo() {
      console.log(this.toString());
    }
    foo();
    offo();
    //console.trace()
  },

};

function caldos() {
  console.log(this.toString());
}

const arrowCall = () => {
  console.log(this.toString());
};

//zelda.greeting = function(){
//console.log(this)
//}
//zelda.greeting = () => {
//console.log(this)
//}
//zelda.greeting()
//console.log(zelda.greet());
//zelda.greet();

//zelda.hi();
//zelda.hi2();

console.clear();

//zelda.call(caldos);
zelda.call(arrowCall);
