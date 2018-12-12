import React, { Component } from 'react';
import {Dashboard, Widget} from 'react-realtime-dashboard';
import './App.css';
import animatecss from 'animate.css';
import Color from "./widgets/Color";

class App extends Component {
  render() {
    return (
      <Dashboard row={4} col={3} gutter={10} animationClassIn='animated flipInX' animationClassOut='animated flipOutX'>
        <Widget size='large'>
          <Color colors={['red', 'blue', 'green', 'orange']}/>
        </Widget>
      </Dashboard>
    );
  }
}

export default App;