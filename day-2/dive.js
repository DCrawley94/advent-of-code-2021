const fs = require('fs');

const data = fs
	.readFileSync('day-2/data.txt')
	.toString()
	.split('\n')
	.map((command) => {
		const [direction, units] = command.split(' ');
		return [direction, +units];
	});

// data format: [['forward', 5], ['up', 2] ...etc.]

// forward X increases the horizontal position by X units.
// down X increases the depth by X units.
// up X decreases the depth by X units.

/* 
start position:
depth:0
horizontal position: 0
*/

function dive(commands) {
	const locationInfo = { depth: 0, horizontalPos: 0 };

	const commandLookup = {
		forward: 'horizontalPos',
		up: 'depth',
		down: 'depth'
	};

	commands.forEach(([command, units]) => {
		command === 'forward'
			? (locationInfo[commandLookup[command]] += units)
			: command === 'down'
			? (locationInfo[commandLookup[command]] += units)
			: (locationInfo[commandLookup[command]] -= units);
	});

	return locationInfo;
}

function diveMk2(commands) {
	const locationInfo = { depth: 0, horizontalPos: 0, aim: 0 };

	for (let i = 0; i < commands.length; i++) {
		const [command, units] = commands[i];

		switch (command) {
			case 'down':
				locationInfo.aim += units;
				break;
			case 'up':
				locationInfo.aim -= units;
				break;
			case 'forward':
				locationInfo.horizontalPos += units;
				locationInfo.depth += locationInfo.aim * units;
		}
	}

	return locationInfo;
}

console.log(diveMk2(data).depth * diveMk2(data).horizontalPos);

module.exports = { dive, diveMk2 };
