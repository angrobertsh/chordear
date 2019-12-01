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
    this.timeout;
    this.state = {
      newchordvar: false,
      majmin: "",
      rootchoice: "",
      notes: [],
      active: [],
      hard: true
    }

    this.hardmode = this.hardmode.bind(this);
    this.playChord = this.playChord.bind(this);
    this.stopChords = this.stopChords.bind(this);
    this.selectRandomChord = this.selectRandomChord.bind(this);
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.chordSelectForm = this.chordSelectForm.bind(this);
    this.changeMessage = this.changeMessage.bind(this);
    this.hardButtons = this.hardButtons.bind(this);
  }

  changeMessage(letter, majmin){
    if(letter.slice(-1) === "S"){
      letter = letter.substring(0, letter.length-1);
      letter = letter + "#";
    }
    if(this.state.hard === false){
      document.getElementsByClassName("message")[0].innerHTML = `Play the <span class="hardnone none">${letter} ${majmin}</span> chord!`;
    } else {
      document.getElementsByClassName("message")[0].innerHTML = `Play the <span class="hardnone">${letter} ${majmin}</span> chord!`;
    }
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

    this.setState({majmin: majmin, rootchoice: letter})

    this.changeMessage(letter, majmin);
  }

  playChord(){
    clearTimeout(this.timeout);
    this.stopChords( () => {
      let currentNotes = this.state.active;
      if(this.props.chord.length > 1){
        for(let j = 0; j < this.props.notes.length; j++) {
          if(this.props.chord.includes(TONE_UTILS.TONE_MAP[this.props.notes[j].freq])){
             this.props.notes[j].start();
             currentNotes.push(this.props.notes[j].letter);
          }
        }
        this.setState({active: currentNotes}, () => {this.timeout = setTimeout(this.stopChords, 700)})
      } else {
        document.getElementsByClassName("message")[0].innerHTML = `No chord selected, please shuffle or select`;
      }
    });
  }

  stopChords(cb = () => {}){
    for(let m = 0; m < this.props.notes.length; m++){
      this.props.notes[m].stop();
    }
    this.setState({active: []}, cb);
  }

  handleSubmit(e) {
    e.preventDefault();
    if(this.state.majmin !== "" && this.state.rootchoice !== ""){
      let letter = this.state.rootchoice;
      this.changeMessage(letter, this.state.majmin);
      this.props.selectChord( this.state.majmin, this.state.rootchoice );
      this.setState({newchordvar: true});
    } else if(this.state.majmin === "") {
      alert("Please select major or minor.");
    } else {
      alert("Please select a chord.");
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
        Pick a chord!
        <br/>
        <br/>
        <div className="majorminor">
          <div>Type:</div>
          <input type="radio" id="major" name="majmin" onChange={this.update("majmin")} value="major" className="majminchoice" /> Major
          <br/>
          <input type="radio" id="minor" name="majmin" onChange={this.update("majmin")} value="minor" className="majminchoice" /> Minor
          <br/>
        </div>
        <div className="chordname">
          <div>Root:</div>
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
        <br/>
        <button className="submitbutton">Select</button>
      </form>);
  }

  hardmode() {
    if(this.state.hard){
      // document.getElementsByClassName("hard").forEach((el) => el.classList.add("hidden"))
      // document.getElementsByClassName("hardnone").forEach((el) => el.classList.add("none"))
      $(".hard").addClass("hidden");
      $(".hardnone").addClass("none");
      this.setState({hard: false});
    } else {
      // document.getElementsByClassName("hard").forEach((el) => el.classList.remove("hidden"))
      // document.getElementsByClassName("hardnone").forEach((el) => el.classList.remove("none"))
      $(".hard").removeClass("hidden");
      $(".hardnone").removeClass("none");
      this.setState({hard: true});
    }
  }

  hardButtons(){
    if(this.state.hard){
      return ([<button key="easy" className="easybutton none" onClick={this.hardmode}></button>, <button key="hard" className="hardbutton" onClick={this.hardmode}></button>]);
    } else {
      return ([<button key="easy" className="easybutton" onClick={this.hardmode}></button>, <button key="hard" className="hardbutton none" onClick={this.hardmode}></button>]);
    }
  }

  render() {
    const hardButtons = this.hardButtons();

    const displaySharps = TONE_UTILS.KEY_SHARPS.map((number, idx) => {
      return (<SharpKey key={idx} scale={TONE_UTILS.NOTE_MAP_INVERTED[number]} pressed={this.state.active.includes(number)}/>);
    });

    const displayRegs = TONE_UTILS.KEY_REGS.map((letter, idx) => {
      return (<NoteKey key={idx} scale={TONE_UTILS.NOTE_MAP_INVERTED[letter]} pressed={this.state.active.includes(letter)}/>);
    });

    return (
      <div className="chordselectcontainer">
        <div className="help"><p className="hard">(Watch me for help!)</p></div>
        <div className="chordselectformcontainer hard">
          {this.chordSelectForm()}
        </div>
        <div className="subkeyboardholder">
          <div className="sharpholder hard">{displaySharps}</div>
          <div className="regholder hard">{displayRegs}</div>
          <div className="optionbox">
            <button className="playbutton" onClick={(e) => {e.preventDefault; this.playChord();}}><img src="https://res.cloudinary.com/dujcpxlhk/image/upload/v1474012677/i2venetyavxccykpphye.png"/></button>
            <button className="shufflebutton" onClick={(e) => {e.preventDefault; this.selectRandomChord();}}><img src="https://res.cloudinary.com/dujcpxlhk/image/upload/v1474012770/prwsmvpx4w38jrs9rpnh.png"/></button>
            { hardButtons }
          </div>
        </div>
      </div>);
  }

}

export default Chordselect;
