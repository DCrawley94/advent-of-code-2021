const fs = require('fs');

// This is a helper function for working out which bit is more popular

function rateCalculator(binaryArray) {
	const bitTally = {};
	const rateObj = { gamma: '', epsilon: '' };

	binaryArray.forEach((binary) => {
		const splitBin = binary.split('');
		// creates tally of binary numbers for calculating gamma and epsilon
		splitBin.forEach((bit, index) => {
			bitTally[index]
				? bitTally[index][bit]
					? bitTally[index][bit]++
					: (bitTally[index][bit] = 1)
				: (bitTally[index] = {});
		});
	});

	for (let bit in bitTally) {
		if (bitTally[bit]['0'] > bitTally[bit]['1']) {
			rateObj.gamma += '0';
			rateObj.epsilon += '1';
		} else {
			rateObj.gamma += '1';
			rateObj.epsilon += '0';
		}
	}

	return rateObj;
}

function binaryDiagnosis(binaryArr) {
	const { gamma, epsilon } = rateCalculator(binaryArr);

	return parseInt(gamma, 2) * parseInt(epsilon, 2);
}

const data = fs.readFileSync('day-3/data.txt').toString().split('\n');

console.log(binaryDiagnosis(data));

module.exports = { binaryDiagnosis, rateCalculator };
