import React, {Component} from 'react';
import './Polaroid.css';

class Polaroid extends Component {

    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            polaroid: '',
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
            <div className="instant-photo">
                <div className="instant-photo__content">
                    <img className="instant-photo__image"
                         src={this.state.polaroid}/>
                </div>
            </div>
        );
    }
}

export default Polaroid;

