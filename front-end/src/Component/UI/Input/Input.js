import React from 'react';
import './Input.scss';

const input = (props)=> {

    let inputElement = null;
    switch(props.elementType) {
        case ('input'): 
            inputElement = <input className="InputElement" {...props.elementConfig}
                            value={props.value} onChange={props.onChanged} />;
            break;
        case 'textarea': 
            inputElement = <textarea className="InputElement" {...props.elementConfig}
                            value={props.value} onChange={props.onChanged} />
            break;
        default: 
            inputElement = <input className="InputElement" {...props.elementConfig}
                            value={props.value} onChange={props.onChanged} />
    }
    return inputElement;
}

export default input;