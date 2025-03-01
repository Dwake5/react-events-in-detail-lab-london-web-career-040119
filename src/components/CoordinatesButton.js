// Code CoordinatesButton Component Here
import React from 'react'

class CoordinatesButton extends React.Component {

    clickHandler = (e) => {
        this.props.onReceiveCoordinates([e.clientX, e.clientY])
    }

    render() {
       return (
            <button onClick={this.clickHandler}>Coords from here</button>
       )
    }
}

export default CoordinatesButton