import React, { Component } from 'react';

export default class Matrix extends Component {
    constructor(props) {
        super(props)
        this.state = {
            color: props.value
        }
    }
    
    newState = () => {
        this.setState({
            color: '#333'
        })
    }
    render(){
        return <div onClick={this.newState} className="cell" style={{backgroundColor: this.state.color}}></div>
    }
}