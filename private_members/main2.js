// a weakmap is a dictionary where its keys are objects and values can be anything
// called a weakmap because the keys are weak. if there is no reference to them
// then they will be garbage collected
const _radius = new WeakMap();
const _move = new WeakMap();

class Circle {
	constructor(radius) {
		_radius.set(this, radius);

		_move.set(this, () => {
			console.log('move', this);
		});
	}

	draw() {
		_move.get(this)();

		console.log('draw');
	}
}

const c = new Circle(1);
