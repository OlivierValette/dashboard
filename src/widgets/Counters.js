import React, {Component} from 'react';
import '@fortawesome/fontawesome-free/css/brands.css';
import './Counters.css';

class Counters extends Component {

    constructor(props) {
        super(props);
        this.state = {
            // Defaults
            index: 0,
            socialMedium: this.props.socialMedia[0],
        }
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            this.props.animate().then(() => {
                const index = (this.state.index >= this.props.socialMedia.length - 1) ? 0 : this.state.index + 1;
                this.setState({
                    index: index,
                    socialMedium: this.props.socialMedia[index],
                })
            })
        }, 5000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render() {
    /*
        if (this.state.socialMedium.key.name !== '' && this.state.socialMedium.key.value !== '') {
            let url = this.state.socialMedium.api_url;
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    this.props.animate().then(() => {
                        const dog = data[0];
                        this.setState({dog: dog});
                    })
            });
        }
    */
        return (
            <div className={"item " + this.state.socialMedium.name}>
                <i className={"fab " + this.state.socialMedium.logo + " fa-2x"}></i>
                <span className="count">
                    {this.state.socialMedium.user}
                </span>
            </div>
        );
    }
}

export default Counters;