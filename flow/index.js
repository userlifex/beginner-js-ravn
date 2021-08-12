function sayHello() {
  console.log('hola');
}

for (let i = 0; i < 10; i++) {
  const isNice = Math.random() >= 0.5 ? true : false;
  console.log(`this is the ${i} iteration`);

  isNice && sayHello();
}
