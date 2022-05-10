function Stopwatch() {
	let duration,
		startTime,
		endTime,
		running = 0;

	Object.defineProperty(this, 'duration', {
		get: function () {
			return duration;
		},
		set: function (value) {
			duration = value;
		},
	});
	Object.defineProperty(this, 'startTime', {
		get: function () {
			return startTime;
		},
	});
	Object.defineProperty(this, 'endTime', {
		get: function () {
			return endTime;
		},
	});
	Object.defineProperty(this, 'running', {
		get: function () {
			return running;
		},
	});
}

const sw = new Stopwatch();

Stopwatch.prototype.start = function () {
	if (this.running) throw new Error('Stopwatch has already started.');

	this.running = true;

	this.startTime = new Date();
};

Stopwatch.prototype.stop = function () {
	if (!this.running) throw new Error('Stopwatch has not been started');

	this.running = false;

	this.endTime = new Date();

	const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
	duration += seconds;
};

Stopwatch.prototype.reset = function () {
	this.running = false;
	this.startTime = null;
	this.endTime = null;
	duration = 0;
};
// duration is a property
// reset, start, and stop are methods
