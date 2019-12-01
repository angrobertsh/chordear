import Note from './note';
import * as TONE_UTILS from './tones';

const NOTES = [];

for(let i = 0; i < TONE_UTILS.FREQ_SHARPS.length; i++)
{
  NOTES.push(new Note(TONE_UTILS.FREQ_SHARPS[i], TONE_UTILS.KEY_SHARPS[i]))
}
for(let j = 0; j < TONE_UTILS.FREQ_REGS.length; j++)
{
  NOTES.push(new Note(TONE_UTILS.FREQ_REGS[j], TONE_UTILS.KEY_REGS[j]))
}

export default NOTES;
