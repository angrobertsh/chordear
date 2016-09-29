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
            selector: ".shufflebutton",
            body: <div style={{color: "green"}}>Get a random chord!</div>
          },
          {
            step: 2,
            selector: ".chordform",
            body: <div style={{color: "yellow"}}>Or select a chord here.</div>
          },
          {
            step: 3,
            selector: ".hard",
            body: <div style={{color: "yellow"}}>Listen to the chord and watch it play on this keyboard</div>
          },
          {
            step: 4,
            selector: ".mainkeyboardholder",
            body: <div style={{color: "yellow"}}>Play it back using your computer keyboard!</div>
          },
          {
            step: 5,
            selector: ".hardbutton",
            body: <div style={{color: "yellow"}}>If you want a challenge, try hard mode</div>
          }
        ]}
      />
    );
  }




}

export default Tutorial;
