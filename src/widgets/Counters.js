import React, {Component} from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
import './Counters.css';

class Counters extends Component {

    constructor(props) {
        super(props);
        this.state = {
            // Defaults
            index: 0,
            socialMedium: this.props.socialMedia[0],
            count: 0,
        }
    }

    componentDidMount() {
        // Toggle between social media every 5s
        this.timer = setInterval(() => {
            this.props.animate().then(() => {
                const index = (this.state.index >= this.props.socialMedia.length - 1) ? 0 : this.state.index + 1;
                this.setState({
                    index: index,
                    socialMedium: this.props.socialMedia[index],
                })
            })
        }, 2000);

        // Update counters every minute
        this.counterTimer = setInterval(() => {
            // First test with Github
            if (this.state.socialMedium.name === 'github') {
                if (this.state.socialMedium.key.name !== '' && this.state.socialMedium.key.value !== '') {
                    let url = this.state.socialMedium.api_url+
                        '/?'+this.state.socialMedium.key.name+'='+this.state.socialMedium.key.value;
                    fetch(url)
                        .then(response => response.json())
                        .then(data => {
                            this.props.animate().then(() => {
                                this.setState({count: parseInt(data.followers)});
                            })
                        });
                }
            }
        }, 60000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
        clearInterval(this.counterTimer);
    }

    render() {

        return (
            <div className={"item " + this.state.socialMedium.name}>
                <p>Follow us on {this.state.socialMedium.name}</p>
                <p><i className={"fab " + this.state.socialMedium.logo + " fa-6x"}></i></p>
                <p>{this.state.socialMedium.user}</p>
                <p className="count">{this.state.count}</p>
                <p>{this.state.socialMedium.counter}</p>
            </div>
        );
    }
}

export default Counters;