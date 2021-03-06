import React, {Component} from 'react';
import './Color.css';

class Color extends Component {

    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            color: this.props.colors[0],
        }
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            this.props.animate().then(() => {
                const index = (this.state.index >= this.props.colors.length - 1) ? 0 : this.state.index + 1;
                this.setState({
                    index: index,
                    color: this.props.colors[index],
                })
            })
        }, 3000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render() {
        return (
            <div style={{ backgroundColor: this.state.color }} className="Color">
            </div>
        );
    }
}

export default Color;