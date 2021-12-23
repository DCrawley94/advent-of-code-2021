const { sonarSweep, sonarSweepWindows } = require('./day1');
const testDepths = [150, 152, 155, 156, 157, 141, 124, 138, 143, 145, 144, 146];

describe('sonarSweep()', () => {
	it('should return 0 when input length is <= 1', () => {
		expect(sonarSweep([])).toBe(0);
		expect(sonarSweep([1])).toBe(0);
	});
	it('should return the number of times the depth increases', () => {
		expect(sonarSweep([1, 1])).toBe(0);
		expect(sonarSweep([1, 2])).toBe(1);
		expect(sonarSweep([1, 2, 3])).toBe(2);
		expect(sonarSweep([1, 3, 2, 4, 5, 1])).toBe(3);
		expect(sonarSweep(testDepths)).toBe(8);
	});
	it("shouldn't mutate input", () => {
		sonarSweep(testDepths);
		expect(testDepths).toEqual([
			150, 152, 155, 156, 157, 141, 124, 138, 143, 145, 144, 146
		]);
	});
});

describe('sonarSweepWindows()', () => {
	it('should return 0 when input length < 4', () => {
		expect(sonarSweepWindows([])).toBe(0);
		expect(sonarSweepWindows([1])).toBe(0);
		expect(sonarSweepWindows([1, 2])).toBe(0);
		expect(sonarSweepWindows([1, 2, 3])).toBe(0);
	});
	it('should return the number of increases in the depth windows', () => {
		expect(sonarSweepWindows([199, 200, 208, 210])).toBe(1);
		expect(sonarSweepWindows([210, 208, 200, 199])).toBe(0);
	});
});
