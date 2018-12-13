import React, { Component } from 'react';
import {Dashboard, Widget} from 'react-realtime-dashboard';
import './App.css';
import 'animate.css';
import Color from "./widgets/Color";
import Dog from "./widgets/Dog";
import Counters from "./widgets/Counters";

class App extends Component {

   render() {
    return (
      <Dashboard row={4} col={8} gutter={4} animationClassIn='animated bounceIn' animationClassOut='animated bounceOut'>
        <Widget size='large'>
            <Color colors={['red', 'blue', 'green', 'orange', 'purple', 'gray']}/>
        </Widget>
        <Widget size='big'>
            <Dog/>
        </Widget>
        <Widget size={'tall'}>
            <Counters socialMedia={[
                                    {
                                        name: "twitter",
                                        logo: "fa-twitter",
                                        counter: "Followers",
                                        user: '@DC_Rennes',
                                        api_url: '',
                                        key: {
                                            name: 'access_token',
                                            value: ''
                                        },
                                    },
                                    {
                                        name: "facebook",
                                        logo: "fa-facebook",
                                        counter: "Likes",
                                        user: 'Digital-Campus-Rennes',
                                        api_url: '',
                                        key: {
                                            name: 'access_token',
                                            value: '',
                                        },
                                    },
                                    {
                                        name: "instagram",
                                        logo: "fa-instagram",
                                        counter: "Followers",
                                        user: 'digital_campus_rennes',
                                        api_url: '',
                                        key: {
                                            name: 'acces_token',
                                            value: '',
                                        },
                                    },
                                    {
                                        name: "linkedin",
                                        logo: "fa-linkedin",
                                        counter: "Connections",
                                        user: 'Digital Campus',
                                        api_url: '',
                                        key: {
                                            name: 'oauth',
                                            value: '',
                                        },
                                    },
                                    {
                                        name: "youtube",
                                        logo: "fa-youtube",
                                        counter: "Subscribers",
                                        user: 'DigitalCampusWeb',
                                        api_url: '',
                                        key: {
                                            name: 'key',
                                            value: '',
                                        },
                                    },
                                    {
                                        name: "github",
                                        logo: "fa-github",
                                        counter: "Followers",
                                        user: 'digital-campus-rennes',
                                        api_url: 'https://api.github.com',
                                        key: {
                                            name: 'access_token',
                                            value: '',
                                        },
                                    },
                                    ]}
            />
        </Widget>
      </Dashboard>
    );
  }
}

export default App;