// creates an AudioContext with createOscillator createGain methods and currentTime and destination (your speakers)

const createOscillator = (freq) => {
  if(!window.ctx){
    window.ctx = new (window.AudioContext || window.webkitAudioContext)();
  }

  const osc = window.ctx.createOscillator();
  osc.type = "square";
  // alternatives are sawtooth, square, triangle, custom(????)something
  // if you use custom you use setPeriodicWave(wave) and you generate wave with createPeriodicWave((2 el array), (2 el array))
  osc.frequency.value = freq;
  osc.detune.value = 0;
  // play with this, it has to do with loudness at start and end of note
  osc.start(window.ctx.currentTime);
  // osc.stop is also a method
  // osc.onended = function() {
  //   you might want to possibly do something
  // }
  return osc;
};

const createGainNode = () => {
  if(!window.ctx){
    window.ctx = new (window.AudioContext || window.webkitAudioContext)();
  }

  const gainNode = window.ctx.createGain();
  gainNode.gain.value = 0;
  gainNode.connect(window.ctx.destination);
  return gainNode;
};

class Note {
  constructor(freq, letter) {
    if(!window.ctx){
      window.ctx = new (window.AudioContext || window.webkitAudioContext)();
    }

    this.freq = freq;
    this.letter = letter;
    this.oscillatorNode = createOscillator(freq);
    this.gainNode = createGainNode();
    this.oscillatorNode.connect(this.gainNode);
  }

  start() {
    this.gainNode.gain.value = 0.3;
  }

  stop() {
    this.gainNode.gain.value = 0;
  }
};

export default Note;
