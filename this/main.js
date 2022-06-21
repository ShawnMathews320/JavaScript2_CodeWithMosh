// prevents the global/window object from being modified
'use strict';

const Circle = function () {
	this.draw = function () {
		console.log(this);
	};
};

const c = new Circle();
c.draw(); // method call

// if a method is called as a function 'this' will
// point to undefinded instead of the window/global object
const draw = c.draw;
draw(); // function call

// ES6 classes automatically use strict mode whether or not
// it is defined
class Square {
	draw() {
		console.log(this);
	}
}

const s = new Square();
const create = s.create;
create(); // outputs undefined
