'use strict';
const arr = [12, 3, 4, 5, 6, 7];

const ob = {
  arr,
  name: 'arr of nums',
  printNums() {
    console.log(this);
    arr.forEach(function (item) {
      console.log(this);
    });
  },
};

//ob.printNums();

//console.log('---------------')
arr.forEach(() => {
  console.log(this.toString() || 'undefined');
});

arr.forEach(function (item) {
  console.log(this);
});
