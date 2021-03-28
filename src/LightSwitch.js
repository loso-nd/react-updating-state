import React, {Component} from 'react';

class LightSwitch extends Component {

    state = {
        toggled: false
    }

    handleClick = () => {
        this.setState(prevState => {
            return {
                toggled: !prevState.toggled
            }
        })
    }

    render() {
        return (
            <div>
                <button onClick={() => this.handleClick()}>{this.state.toggled ? "ON" : "OFF"}</button>
            </div>
        )
    }
}

export default LightSwitch;