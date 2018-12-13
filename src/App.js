import React, { Component } from 'react';
import {Dashboard, Widget} from 'react-realtime-dashboard';
import './App.css';
import 'animate.css';
import Color from "./widgets/Color";
import Dog from "./widgets/Dog";

class App extends Component {
  render() {
    return (
      <Dashboard row={4} col={3} gutter={10} animationClassIn='animated fadeInDownBig' animationClassOut='animated bounceOut'>
        <Widget size='large'>
            <Color colors={['red', 'blue', 'green', 'orange', 'purple', 'gray']}/>
        </Widget>
        <Widget size='tall'>
            <Dog/>
        </Widget>
        <Widget size='tall'>
            <Counters/>
        </Widget>
      </Dashboard>
    );
  }
}

export default App;