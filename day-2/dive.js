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
	const location = { depth: 0, horizontalPos: 0 };

	const commandLookup = {
		forward: 'horizontalPos',
		up: 'depth',
		down: 'depth'
	};

	commands.forEach(([command, units]) => {
		command === 'forward'
			? (location[commandLookup[command]] += units)
			: command === 'down'
			? (location[commandLookup[command]] += units)
			: (location[commandLookup[command]] -= units);
	});

	return location;
}

const testLocation = dive(data);

console.log(testLocation.depth * testLocation.horizontalPos);

module.exports = { dive };
