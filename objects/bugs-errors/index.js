class MultiplicatorFailure extends Error {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.2) {
    return a * b;
  }

  throw new MultiplicatorFailure('It is broken');
}

//function call(a, b) {
//let result = null;
//do {
//try {
//result = primitiveMultiply(a, b);
//} catch (error) {
//if (error instanceof MultiplicatorFailure) {
//result = primitiveMultiply(a, b);
//}
//else { {}
//console.log("break")
//break;
//}
//} finally {
//if (result === null) continue;
//else break;
//}
//} while (true);
//return result;
//}

function call(a, b) {
  for (;;) {
    try {
      return primitiveMultiply(a, b);
    } catch (e) {
      if (e instanceof MultiplicatorFailure) continue;
      break;
    }
  }
}

//console.log(call(a, 2));
//console.log(call(5, 2));
//console.log(call(4, 2));
//console.log(call(3, 2));
//console.log(call(2, 2));

//call(1, 2);

class BoxLockedError extends Error {}

const box = {
  locked: true,
  unlock() {
    this.locked = true;
  },
  lock() {
    this.locked = false;
  },
  _content: ['joan', 123],
  get content() {
    if (this.locked) throw new Error('Locked');
    return this._content;
  },
};

function addContent(body) {
  for (;;) {
    let isOpen = true;
    let items = [1, 2, 3, 4];
    try {
      body(...items);
    } catch (error) {
      if (error instanceof BoxLockedError) {
        box.unlock();
        isOpen = false;
        continue;
      }
      console.log(error);
    } finally {
      if (!isOpen) {
        box.lock();
      }
      break;
    }
  }
  console.log(box);
}

function body(...items) {
  box._content.push(...items);
}
//console.log(box)
console.log(box.lock())
//addContent(body)
//body('carro');

//ar1 = [1, 2, 3];
//ar2 = [4, 6, 7];
//ar1.push(...ar2);
//console.log(ar1);
//console.log(box);
//addContent(body);
//console.log(box);
//console.log(box){}
