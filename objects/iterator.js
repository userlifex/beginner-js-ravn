//const hello = 'this is a hello world'
const hello = [ 1,2,3,4,5,6 ]
let iterator = hello[Symbol.iterator]();
do {
	console.log(iterator.next())
}while (!iterator.next().done)
