function Bunny(name, type) {
	this.name = name;
	this.type = type;
}

Bunny.prototype.say = function (message) {
	console.log(`${this.name} bunny says ${message}`)
};

const bus = new Bunny("bugs", "anoying");

//console.log(bus);
//
//bus.say('ya llegue bebita')
console.log(''.__proto__.__proto__.__proto__.constructor.name || "no existe")

console.log(bus.constructor.name)
//type(bus)
//console.log(instanceof bus)
