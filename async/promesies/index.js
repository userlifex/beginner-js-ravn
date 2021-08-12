const prom = new Promise((success, reject) => {
  success('PASO');
  reject(new Error('Fail'));
})
  .then((value) => console.log(`Handler 1 and value is:${value}`))
  .catch((reason) => {
    console.log('Caught failure ' + reason);
    //return 'nothing';

    //return new Error('new Error')
  })
  .catch((secondCatch) => {
    console.log('second');
    console.log(secondCatch);
    //return
  })
  .then((value) => {
    console.log('Handler 2', value);
    console.log('this always happend');
  });
//console.log(prom)
