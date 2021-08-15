var promise = new Promise(function (resolve, reject) {
  // ADD CODE HERE
  resolve(function () {
    setTimeout(function () {
      console.log('promise');
      //return 1;
    }, 1000);
    //console.log('afer setTimeout')
  });
});
//new 
//
//
promise
  .then((data) => {
    console.log('first then');
    console.log(data);
    data();
    return data;
  })
  .then((data) => {
    console.log('second then');
    data();
    console.log(data);
    return data()
  })
  .then((data) => {
    console.log(data)
    //data();
  });
