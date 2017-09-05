import React, { Component } from 'react';


class ValueBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
            numberList: []
        }
    }
    render () {
        return (
            <div>
                <div>
                    <input value={this.state.value}/>
                </div>
                <div className="button-container">
                <div>
                    <button value={7} onClick={this._UpdateValue}>7</button>
                    <button value={8} onClick={this._UpdateValue}>8</button>
                    <button value={9} onClick={this._UpdateValue}>9</button>
                    <button>/</button>
                </div>
                <div>
                    <button value={4} onClick={this._UpdateValue}>4</button>
                    <button value={5} onClick={this._UpdateValue}>5</button>
                    <button value={6} onClick={this._UpdateValue}>6</button>
                    <button onClick={this._MultiplyValue}>X</button>
                </div>
                <div>
                    <button value={1} onClick={this._UpdateValue}>1</button>
                    <button value={2} onClick={this._UpdateValue}>2</button>
                    <button value={3} onClick={this._UpdateValue}>3</button>
                    <button>-</button>
                </div>
                <div>
                    <button value={0} onClick={this._UpdateValue}>0</button>
                    <button value={0} onClick={this._UpdateValue}>Clear</button>
                    <button>+</button>
                </div>
            </div>    
        </div>
        );
    }

_UpdateValue = (e) => {
    this.setState({
        value: e.target.value,
        numberList: this.state.numberList.concat([e.target.value])
    })
}

_MultiplyValue = (e) => {
    debugger;
    this.setState({
        value: this.state.value
    })
}








}


export default ValueBox;