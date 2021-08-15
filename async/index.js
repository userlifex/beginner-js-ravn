function foo() {
  console.log('calling the foo function');
  setTimeout(function () {
    console.log('calling the first setTimeout...');
    setTimeout(function () {
      console.log('calling the second setTimeout...');
      setTimeout(function () {
        console.log('calling the thirdth setTimeout...');
      }, 1000);
    }, 1000);
  }, 1000);
}

const ob = {
  name: 'leonel',
  lastname: 'messi',
  foo,
};


ob.foo();

setTimeout(foo, 1000)

