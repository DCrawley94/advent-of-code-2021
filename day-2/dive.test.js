const { dive } = require('./dive');
const fs = require('fs');

const data = fs
	.readFileSync('day-2/data.txt')
	.toString()
	.split('\n')
	.map((command) => {
		const [direction, units] = command.split(' ');
		return [direction, +units];
	});

describe('dive()', () => {
	it('returns initial position if data length < 1', () => {
		expect(dive([])).toEqual({ depth: 0, horizontalPos: 0 });
	});
	it('"forward" commands should increase the horizontal position by the given integer', () => {
		expect(dive([['forward', 5]])).toEqual({ depth: 0, horizontalPos: 5 });
	});
});
