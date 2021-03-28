// Code ClickityClick Component Here
import React, { Component } from 'react';

class ClickityClick extends Component {

    state ={
        hasBeenClicked: false,
        currentTheme: 'blue',
    }

    handleClick = () => {
        console.log("I Got this")
        this.setState({
            hasBeenClicked: !this.state.hasBeenClicked
        })
        
    }



    render() {
        return (
            <div>
                <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
                <button onClick={() => this.handleClick()}>Click Moi!</button>
            </div>
        );
    }
}

export default ClickityClick;