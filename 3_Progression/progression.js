const scribble = require('scribbletune');

let clip = scribble.clip({
	notes: scribble.progression('D4 minor', 'I IV V ii'),
	pattern: 'x_'.repeat(4) + 'x_______'
});

scribble.midi(clip)
