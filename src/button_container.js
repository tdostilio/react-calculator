import React from 'react';
import ValueBox from './value_box.js';


const ButtonContainer = () => {
    return (
        <div className="button-container">
            <div>
                <button value={7} onClick={ValueBox._UpdateValue}>7</button>
                <button value={8}>8</button>
                <button value={9}>9</button>
            </div>
            <div>
                <button value={4}>4</button>
                <button value={5}>5</button>
                <button value={6}>6</button>
            </div>
            <div>
                <button>1</button>
                <button>2</button>
                <button>3</button>
            </div>
            <div>
                <button>0</button>
                <button>Clear</button>
            </div>
        </div>        
        )
}

export default ButtonContainer;