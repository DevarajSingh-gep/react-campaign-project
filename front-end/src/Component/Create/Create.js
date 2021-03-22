import React, { useCallback, useState } from 'react';
import { useHistory } from "react-router-dom";

import './Create.scss';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';

const initialState = {
    campaignDetails: {
        name: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'ZIP Code'
            },
            value: ''
        },
        title:{
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Country Code'
            },
            value: ''
        },
        date: {
            elementType: 'input',
            elementConfig: {
                type: 'date',
                // placeholder: 'ZIP Code'
            },
            value: ''
        },
    }
}

const Details = (props)=> {
    const [state, setstate] = useState(initialState);
    let history = useHistory();

    const inputChangedHandler = useCallback(
        (event, id) => {
            let {...campaignDetails} = { ...state.campaignDetails }
            let updatedFormElement = {
                ...campaignDetails[id]
            }
            updatedFormElement.value = event.target.value;
            campaignDetails[id] = updatedFormElement;
            setstate({
                campaignDetails: campaignDetails
            });
        },
    )

    const createCampaign = useCallback(
        (event) => {
            let name = state.campaignDetails.name.value;
            let countryCode = state.campaignDetails.title.value;
            let date = state.campaignDetails.date.value;
            props.createCampaign(name, countryCode, date);
            event.preventDefault();
            history.push('/campaigns');
        })
    
    const formElementArray = [];

    for(let key in state.campaignDetails) {
        formElementArray.push({
            id: key,
            config: state.campaignDetails[key]
        })
        console.log(formElementArray);
    }
    
    let form = (
        <form onSubmit={(event)=> createCampaign(event)}>
            {formElementArray.map(formElement => (
                <Input key={formElement.id} elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value} 
                        onChanged={(event)=> inputChangedHandler(event, formElement.id) }/>
            ))}
             <Button btnType="Success">Create</Button>
        </form>
    )
    return(
        <div className="Details-container">
            <h1>Create Campaign</h1>
            {form}
        </div>
    );
}

export default Details;