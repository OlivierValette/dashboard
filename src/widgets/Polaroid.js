import React, {Component} from 'react';
import './Polaroid.css';

class Polaroid extends Component {

    constructor(props) {
        super(props);
        this.state = {
            index: -1,
            polaroid: 'http://i0.wp.com/www.connexion-y.fr/wp-content/uploads/2015/10/logo-Digital-CAMPUS.png?fit=300%2C300',
            }
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            this.props.animate().then(() => {
                const index = (this.state.index >= this.props.photo.length - 1) ? 0 : this.state.index + 1;
                this.setState({
                    index: index,
                    polaroid: this.props.photo[index],
                })
            })
        }, 3000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render() {

        return (
            <div className="container">
                <div className="instant-photo">
                    <div className="instant-photo__content">
                        <img className="instant-photo__image"
                             src={this.state.polaroid}
                             />
                    </div>
                    <p>WE ARE DC</p>
                </div>
            </div>
        );
    }
}

export default Polaroid;

