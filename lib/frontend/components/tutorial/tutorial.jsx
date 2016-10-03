import React from 'react';
import Tour from "react-user-tour";

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
        onNext={(step) => this.setState({tourStep: step})}
        onBack={(step) => this.setState({tourStep: step})}
        onCancel={() => this.setState({isTourActive: false})}
        steps={[
          {
            step: 1,
            selector: "#preloadshuffle",
            title: "Shuffle!",
            body: "Get a random chord!"
          },
          {
            step: 2,
            selector: ".chordform",
            title: "See!",
            body: "Or select a chord here."
          },
          {
            step: 3,
            selector: ".hard",
            title: "Listen!",
            body: "Listen to the chord and watch it play on this keyboard",
            position: "top"
          },
          {
            step: 4,
            selector: ".mainkeyboardholder",
            title: "Play!",
            body: "Play it back using your computer keyboard!",
            position: "bottom"
          },
          {
            step: 5,
            selector: ".hardbutton",
            title: "Hard Mode",
            body: "If you want a challenge, try hard mode",
            position: "top-right"
          }
        ]}
      />
    );
  }




}

export default Tutorial;
