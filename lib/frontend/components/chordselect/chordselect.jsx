import React from 'react';
import Note from '../../util/note';
import * as TONE_UTILS from '../../util/tones';
import * as CHORD_UTILS from '../../util/chords';
import $ from 'jquery';
import NoteKey from '../keyboard/note_key';
import SharpKey from '../keyboard/sharp_key';

class Chordselect extends React.Component{

  constructor(props){
    super(props);
    this.freqsharps = [277.18, 311.13, 369.99, 415.30, 466.16, 554.37, 622.25, 739.99];
    this.freqregs = [261.63, 293.66, 329.63, 349.23, 392.00, 440.00, 493.88, 523.25, 587.33, 659.25, 698.46, 783.99];
    this.keysharps = [2, 3, 5, 6, 7, 9, 0, '='];
    this.keyregs = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']'];
    this.state = {
      newchordvar: false,
      majmin: "",
      rootchoice: "",
      notes: [],
      active: []
    }
    for(let i = 0; i < this.freqsharps.length; i++)
    {
      this.state.notes.push(new Note(this.freqsharps[i], this.keysharps[i]))
    }
    for(let j = 0; j < this.freqregs.length; j++)
    {
      this.state.notes.push(new Note(this.freqregs[j], this.keyregs[j]))
    }

    this.playChord = this.playChord.bind(this);
    this.stopChords = this.stopChords.bind(this);
    this.selectRandomChord = this.selectRandomChord.bind(this);
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.chordSelectForm = this.chordSelectForm.bind(this);
  }

  selectRandomChord(){
    let majmin = Math.random();
    // 12 is number of chords in constant
    let keypick = Math.floor(Math.random()*12);
    let letter = Object.keys(CHORD_UTILS.major)[keypick]
    if(majmin > .5){
      majmin = "major";
      this.props.selectChord(majmin, letter);
    } else {
      majmin = "minor";
      this.props.selectChord(majmin, letter);
    }
    this.state.newchordvar = true;

    document.getElementById(majmin).checked = true;
    document.getElementById(letter).checked = true;
  }

  playChord(){
    for(let j = 0; j < this.state.notes.length; j++) {
      if(this.props.chord.includes(TONE_UTILS.TONE_MAP[this.state.notes[j].freq])){
         this.state.notes[j].start();
         this.state.active.push(this.state.notes[j].letter);
      }
    }
    this.render();
    setTimeout(this.stopChords, 700);
  }

  stopChords(){
    for(let m = 0; m < this.state.notes.length; m++){
      this.state.notes[m].stop();
    }
    this.state.active = [];
  }

  handleSubmit(e) {
    e.preventDefault();
    if(this.state.majmin !== "" && this.state.rootchoice !== ""){
		  this.props.selectChord( this.state.majmin, this.state.rootchoice );
      this.state.newchordvar = true;
    } else {
      alert("Please select a chord.")
    }
  }

  update(field){
    return e => { this.setState({[field]: e.currentTarget.value }); };
  }

  componentDidUpdate(){
    if(this.state.newchordvar){
      this.playChord();
      this.state.newchordvar = false;
    }
  }

  chordSelectForm () {
    return (
      <form onSubmit={this.handleSubmit} className="chordform">
        <div className="majorminor">
          <div>Chord Type:</div>
          <input type="radio" id="major" name="majmin" onChange={this.update("majmin")} value="major" className="majminchoice" /> Major
          <br/>
          <input type="radio" id="minor" name="majmin" onChange={this.update("majmin")} value="minor" className="majminchoice" /> Minor
          <br/>
        </div>
        <div className="chordname">
          <div>Chord Root:</div>
          <input type="radio" id="a" name="letter" onChange={this.update("rootchoice")} value="a" className="rootchoice" /> A
          <br/>
          <input type="radio" id="aS" name="letter" onChange={this.update("rootchoice")} value="aS" className="rootchoice" /> A#
          <br/>
          <input type="radio" id="b" name="letter" onChange={this.update("rootchoice")} value="b" className="rootchoice" /> B
          <br/>
          <input type="radio" id="c" name="letter" onChange={this.update("rootchoice")} value="c" className="rootchoice" /> C
          <br/>
          <input type="radio" id="cS" name="letter" onChange={this.update("rootchoice")} value="cS" className="rootchoice" /> C#
          <br/>
          <input type="radio" id="d" name="letter" onChange={this.update("rootchoice")} value="d" className="rootchoice" /> D
          <br/>
          <input type="radio" id="dS" name="letter" onChange={this.update("rootchoice")} value="dS" className="rootchoice" /> D#
          <br/>
          <input type="radio" id="e" name="letter" onChange={this.update("rootchoice")} value="e" className="rootchoice" /> E
          <br/>
          <input type="radio" id="f" name="letter" onChange={this.update("rootchoice")} value="f" className="rootchoice" /> F
          <br/>
          <input type="radio" id="fS" name="letter" onChange={this.update("rootchoice")} value="fS" className="rootchoice" /> F#
          <br/>
          <input type="radio" id="g" name="letter" onChange={this.update("rootchoice")} value="g" className="rootchoice" /> G
          <br/>
          <input type="radio" id="gS" name="letter" onChange={this.update("rootchoice")} value="gS" className="rootchoice" /> G#
          <br/>
        </div>
        <button className="submitbutton">Submit</button>
      </form>);
  }


  render() {
    const displaySharps = this.keysharps.map((number, idx) => {
      return (<SharpKey key={idx} scale={TONE_UTILS.NOTE_MAP_INVERTED[number]} pressed={this.state.active.includes(number.toString())}/>);
    });

    const displayRegs = this.keyregs.map((letter, idx) => {
      return (<NoteKey key={idx} scale={TONE_UTILS.NOTE_MAP_INVERTED[letter]} pressed={this.state.active.includes(letter)}/>);
    });

    return (
      <div className="chordselectcontainer">
        <div className="chordselectformcontainer">
          {this.chordSelectForm()}
        </div>
        <div className="subkeyboardholder">
          <div className="sharpholder">{displaySharps}</div>
          <div className="regholder">{displayRegs}</div>
          <div className="optionbox"><button className="shufflebutton" onClick={this.selectRandomChord}>Shuffle</button><button className="playbutton" onClick={this.playChord}>Play</button></div>
        </div>
      </div>);
  }

}

export default Chordselect;
