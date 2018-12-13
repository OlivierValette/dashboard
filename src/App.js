import React, { Component } from 'react';
import {Dashboard, Widget} from 'react-realtime-dashboard';
import './App.css';
import 'animate.css';
import Color from "./widgets/Color";
import Dog from "./widgets/Dog";
import Counters from "./widgets/Counters";
import Polaroid from "./widgets/Polaroid";

class App extends Component {

   render() {
    return (
      <Dashboard row={4} col={6} gutter={4} animationClassIn='animated bounceIn' animationClassOut='animated bounceOut'>
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
        <Widget size={'tall'}>
          <Polaroid photo={[
            "https://c1.staticflickr.com/8/7678/17053428732_3d0a23ecc1_b.jpg",
            "https://i.pinimg.com/736x/d0/f0/fd/d0f0fd559abaed4189e54965c85b428f--toy-camera-pinhole-camera.jpg",
            "https://i1.wp.com/digital-photography-school.com/wp-content/uploads/2016/01/square-format-street-photography-02.jpg?fit=750%2C750&ssl=1",
            "data:image/jpeg;base64,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",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpIGAWzvceQQVn74y0_oVhbrq1kGTSAR-T9YcjrlmVzdFqadsJ",
            ]}
          />
        </Widget>
        <Widget size='big'>
            <Color colors={['red', 'blue', 'green', 'orange', 'purple', 'gray']}/>
        </Widget>
        <Widget size='big'>
            <Dog/>
        </Widget>
      </Dashboard>
    );
  }
}

export default App;