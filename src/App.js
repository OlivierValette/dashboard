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
      <Dashboard row={4} col={3} gutter={10} animationClassIn='animated fadeInDownBig' animationClassOut='animated bounceOut'>
        <Widget size='large'>
            <Color colors={['red', 'blue', 'green', 'orange', 'purple', 'gray']}/>
        </Widget>
        <Widget size='tall'>
            <Dog/>
        </Widget>
        <Widget size='tall'>
            <Counters socialMedia={[
                                    {
                                        name: "twitter",
                                        logo: "fa-twitter",
                                        Counter: "Followers",
                                        user: '',
                                        key: {
                                            name: '@DC_Rennes',
                                            value: ''
                                        },
                                    },
                                    {
                                        name: "facebook",
                                        logo: "fa-facebook",
                                        Counter: "Likes",
                                        user: '',
                                        key: {
                                            name: 'token',
                                            value: '1627334644211864|3_tGe7MNSzumVcKxMyJUTqZAlz4',
                                        },
                                    },
                                    {
                                        name: "instagram",
                                        logo: "fa-instagram",
                                        Counter: "Followers",
                                        user: '',
                                        key: {
                                            name: 'token',
                                            value: '3216680391.5a20414.d66b30dc0857473dbf9723d34b502a73',
                                        },
                                    },
                                    {
                                        name: "linkedin",
                                        logo: "fa-linkedin",
                                        Counter: "Connections",
                                        user: '',
                                        key: {
                                            name: 'oauth',
                                            value: 'AQXo4yikouZnzWkUYZCOnVCKnhAALbi0-eSrlWTORI85p8dHCx_n0lnP7sG1k8HrOqPPvQ6Nkf0iAII2Ui34fsFr6IGcclgDnIsK_Z1Olx3vX-cJNfvuQoqNKFtUvhJOLE43iQQy0y1NDJXIDJV4nTPQCdezuaqAIEbjgcFa8tWsGmSZgtI'
                                        },
                                    },
                                    {
                                        name: "youtube",
                                        logo: "fa-youtube",
                                        Counter: "Subscribers",
                                        user: '',
                                        key: {
                                            name: 'key',
                                            value: 'AIzaSyDXpwzqSs41Kp9IZj49efV3CSrVxUDAwS0',
                                        },
                                    },
                                    {
                                        name: "github",
                                        logo: "fa-github",
                                        Counter: "Followers",
                                        user: '',
                                        key: {
                                            name: '',
                                            value: ''
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