const loop = (value, condition, update, body) => {
	while (condition(value)) {
		body(value);
		value = update(value);
	}
};

//loop(
//3,
//(n) => n >= 0,
//(n) => n - 1,
//(n) => {
//console.log(n * 2);
//console.log("hey");
//}
//);

const each = (array, test) => {
	for (let item of array) {
		test(item);
	}
};

//each(["a", "b", "c", "d", "e"], (item) => {
	//console.log(item.toUpperCase());
//});

console.log("hola".direction)
