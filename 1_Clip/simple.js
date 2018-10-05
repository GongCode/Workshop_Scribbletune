const scribble = require('scribbletune');

// Create a clip that plays the middle C
const c = scribble.clip({
	notes: 'c4',
	pattern: 'x'
});

// Render a MIDI file of this clip
scribble.midi(c, 'c.mid');
