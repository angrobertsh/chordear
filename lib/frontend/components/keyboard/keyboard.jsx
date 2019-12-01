import React from 'react';
import Note from '../../util/note';
import * as TONE_UTILS from '../../util/tones';
import * as CHORD_UTILS from '../../util/chords';
import NoteKey from './note_key';
import SharpKey from './sharp_key';
import TutorialContainer from './tutorial/tutorial_container';

class Keyboard extends React.Component{

  constructor(props){
    super(props);
    this.notes = [];

    this.playNotes = this.playNotes.bind(this);
    this.initializeAudioAPI = this.initializeAudioAPI.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', e => this.onKeyDown(e));
    document.addEventListener('keyup', e => this.onKeyUp(e));
  }

  initializeAudioAPI() {
    if(this.notes.length === 0)
    {
      const freqsharps = [277.18, 311.13, 369.99, 415.30, 466.16, 554.37, 622.25, 739.99];
      const freqregs = [261.63, 293.66, 329.63, 349.23, 392.00, 440.00, 493.88, 523.25, 587.33, 659.25, 698.46, 783.99];
      const notesharps = ["C4S", "D4S", "F4S", "G4S", "A4S", "C5S", "D5S", "F5S"];
      const noteregs = ["C4", "D4", "E4", "F4", "G4", "A4", "B4", "C5", "D5", "E5", "F5", "G5"];
      const keysharps = [2, 3, 5, 6, 7, 9, 0, '='];
      const keyregs = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']'];

      for(let i = 0; i < freqsharps.length; i++)
      {
        this.notes.push(new Note(freqsharps[i], keysharps[i]))
      }
      for(let j = 0; j < freqregs.length; j++)
      {
        this.notes.push(new Note(freqregs[j], keyregs[j]))
      }
    }
  }

  onKeyUp(e){
    this.props.keyReleased(e.key);
  }

  onKeyDown(e){
    this.props.keyPressed(e.key);
  }

  playNotes(){
    for(let i = 0; i<this.notes.length; i++){
      if(this.props.playing.includes(TONE_UTILS.TONE_MAP[this.notes[i].freq])){
         this.notes[i].start();
      } else {
         this.notes[i].stop();
      }
    }
  }

  render() {
    this.playNotes();
    const displaySharps = this.keysharps.map((number, idx) => {
      return (<SharpKey key={idx} keyb={number} scale={TONE_UTILS.NOTE_MAP_INVERTED[number]} pressed={this.props.playing.includes(number.toString())}/>);
    });

    const displayRegs = this.keyregs.map((letter, idx) => {
      return (<NoteKey key={idx} keyb={letter} scale={TONE_UTILS.NOTE_MAP_INVERTED[letter]} pressed={this.props.playing.includes(letter)}/>);
    });

    return (<div>
      <TutorialContainer initializeAudioAPI={this.initializeAudioAPI}/>
      <div className="mainkeyboardholder">
        <div className="sharpholder">{displaySharps}</div>
        <div className="regholder">{displayRegs}</div>
        </div>;
      </div>
    );
  }

}

export default Keyboard;
