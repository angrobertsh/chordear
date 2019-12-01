import React from 'react';
import Tour from "react-user-tour";
import NOTES from '../../util/audio_initializer';

class Tutorial extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      isTourActive: true,
      tourStep: 1
    };
  }

  render() {
    return (
      <Tour
        active={this.state.isTourActive}
        step={this.state.tourStep}
        onNext={(step) => this.setState({tourStep: step}, () => {this.props.notes.length === 0 ? this.props.setNotes(NOTES) : null})}
        onBack={(step) => this.setState({tourStep: step}, () => {this.props.notes.length === 0 ? this.props.setNotes(NOTES) : null})}
        onCancel={() => this.setState({isTourActive: false}, () => {this.props.notes.length === 0 ? this.props.setNotes(NOTES) : null})}
        steps={[
          {
            step: 1,
            selector: "#preloadshuffle",
            title: <div className="tour-title">Shuffle!</div>,
            body: <div className="tour-body">Get a random chord!</div>
          },
          {
            step: 2,
            selector: ".chordform",
            title: <div className="tour-title">(Or select)</div>,
            body: <div className="tour-body">Or select a chord here.</div>
          },
          {
            step: 3,
            selector: ".hard",
            title: <div className="tour-title">Listen!</div>,
            body: <div className="tour-body">Listen and watch it be played here.</div>,
            position: "top"
          },
          {
            step: 4,
            selector: ".mainkeyboardholder",
            title: <div className="tour-title">Play!</div>,
            body: <div className="tour-body">Play it back with your computer keyboard!</div>,
            position: "bottom"
          },
          {
            step: 5,
            selector: ".hardbutton",
            title: <div className="tour-title">Hard Mode</div>,
            body: <div className="tour-body">If you want a challenge, try hard mode</div>,
            position: "top-right"
          }
        ]}
      />
    );
  }


}

export default Tutorial;
