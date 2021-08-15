function printHello() {
  console.log('hello world');
}

function stopForN(sec = 1) {
  const today = new Date();
  let remain = today;
  console.log('...')
  for (;;) {
    const current = new Date().getTime();
    if (current - today > (1000 * sec)) break;
    remain = current
  }
  console.log(today)
}
setTimeout(printHello, 0)
//printHello()
stopForN(3);
