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
	it('"down command increase depth by given integer"', () => {
		expect(dive([['down', 10]])).toEqual({ depth: 10, horizontalPos: 0 });
	});
	it('"up" command decreases depth by given integer', () => {
		expect(dive([['up', 4]])).toEqual({ depth: -4, horizontalPos: 0 });
	});
	it('works for combinations of different commands', () => {
		expect(
			dive([
				['forward', 5],
				['down', 5],
				['forward', 8],
				['up', 3],
				['down', 8],
				['forward', 2]
			])
		).toEqual({ depth: 10, horizontalPos: 15 });
	});
});
