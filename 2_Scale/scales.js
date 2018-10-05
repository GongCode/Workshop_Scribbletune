const scribble = require('scribbletune');

const dMajor = scribble.scale('D4 major');

const clip = scribble.clip({
    notes: dMajor,
    pattern: 'x'.repeat(8)
});

scribble.midi(clip, 'scales.mid');