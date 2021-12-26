const { binaryDiagnosis, rateCalculator } = require('./binary-diagnostic');

const testArray = [
	'00100',
	'11110',
	'10110',
	'10111',
	'10101',
	'01111',
	'00111',
	'11100',
	'10000',
	'11001',
	'00010',
	'01010'
];

describe('rateCalculator()', () => {
	// can assume there will be a most common/least common bit
	test('should not mutate input array', () => {
		rateCalculator(testArray);
		expect(testArray).toEqual([
			'00100',
			'11110',
			'10110',
			'10111',
			'10101',
			'01111',
			'00111',
			'11100',
			'10000',
			'11001',
			'00010',
			'01010'
		]);
	});

	test('should be able to determine the gamma', () => {
		expect(rateCalculator(testArray).gamma).toBe('10110');
	});
	test('should be able to determine the epsilon', () => {
		expect(rateCalculator(testArray).epsilon).toBe('01001');
	});
});

describe('binaryDiagnosis()', () => {
	// might not need this?
	xtest('binary array with lenth < 2 returns 0', () => {
		expect(binaryDiagnosis([])).toBe(0);
		expect(binaryDiagnosis(['00100'])).toBe(0);
	});
	test('binary array should return the gamma * epsilon', () => {
		expect(binaryDiagnosis(testArray)).toBe(198);
	});
});
