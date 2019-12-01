import Note from './note';
import * as TONE_UTILS from './tones';

class AudioInitializer{
  constructor() {
    this.notes = [];
    for(let i = 0; i < TONE_UTILS.FREQ_SHARPS.length; i++)
    {
      this.notes.push(new Note(TONE_UTILS.FREQ_SHARPS[i], TONE_UTILS.KEY_SHARPS[i]))
    }
    for(let j = 0; j < TONE_UTILS.FREQ_REGS.length; j++)
    {
      this.notes.push(new Note(TONE_UTILS.FREQ_REGS[j], TONE_UTILS.KEY_REGS[j]))
    }
  }

  notes() {
    return this.notes;
  }
}


export default AudioInitializer;
