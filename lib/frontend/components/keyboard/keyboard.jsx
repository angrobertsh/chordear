import React from 'react';
import Note from '../../util/note';
import * as TONE_UTILS from '../../util/tones';
import * as CHORD_UTILS from '../../util/chords';
import NoteKey from './note_key';
import SharpKey from './sharp_key';

class Keyboard extends React.Component{

  constructor(props){
    super(props);

    this.playNotes = this.playNotes.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', e => this.onKeyDown(e));
    document.addEventListener('keyup', e => this.onKeyUp(e));
  }

  onKeyUp(e){
    this.props.keyReleased(e.key);
  }

  onKeyDown(e){
    this.props.keyPressed(e.key);
  }

  playNotes(){
    for(let i = 0; i<this.props.notes.length; i++){
      if(this.props.playing.includes(TONE_UTILS.TONE_MAP[this.props.notes[i].freq])){
         this.props.notes[i].start();
      } else {
         this.props.notes[i].stop();
      }
    }
  }

  render() {
    this.playNotes();
    const displaySharps = TONE_UTILS.KEY_SHARPS.map((number, idx) => {
      return (<SharpKey key={idx} keyb={number} scale={TONE_UTILS.NOTE_MAP_INVERTED[number]} pressed={this.props.playing.includes(number.toString())}/>);
    });

    const displayRegs = TONE_UTILS.KEY_REGS.map((letter, idx) => {
      return (<NoteKey key={idx} keyb={letter} scale={TONE_UTILS.NOTE_MAP_INVERTED[letter]} pressed={this.props.playing.includes(letter)}/>);
    });

    return (<div className="mainkeyboardholder">
        <div className="sharpholder">{displaySharps}</div>
        <div className="regholder">{displayRegs}</div>
      </div>);
  }

}

export default Keyboard;
