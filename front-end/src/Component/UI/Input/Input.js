import React from 'react';
import PropTypes from 'prop-types';
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

input.propTypes = {
    onChanged: PropTypes.func,
    value: PropTypes.string,
    elementConfig: PropTypes.object,
    elementType: PropTypes.string
};

export default input;