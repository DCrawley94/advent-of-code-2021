const fs = require('fs');

function sonarSweep(data) {
	let depthIncreases = 0;
	for (let i = 1; i < data.length; i++) {
		const prevDepth = data[i - 1];
		const currDepth = data[i];
		if (currDepth > prevDepth) depthIncreases++;
	}
	return depthIncreases;
}

function sonarSweepWindows(data) {
	let depthWindowIncreases = 0;
	if (data.length < 4) return depthWindowIncreases;

	for (let i = 3; i < data.length; i++) {
		const prevWindow = [data[i - 3], data[i - 2], data[i - 1]].reduce(
			(prev, curr) => prev + curr
		);
		const currWindow = [data[i - 2], data[i - 1], data[i]].reduce(
			(prev, curr) => prev + curr
		);

		if (currWindow > prevWindow) depthWindowIncreases++;
	}

	return depthWindowIncreases;
}

const input = fs
	.readFileSync('day-1/data.txt')
	.toString()
	.split('\n')
	.map((depth) => +depth);

console.log(sonarSweepWindows(input));

module.exports = { sonarSweep, sonarSweepWindows };
