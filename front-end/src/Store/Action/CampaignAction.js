import axios from "axios";

export const CAMPAIGN_LIST_REQUEST = "CAMPAIGN_LIST_REQUEST";
export const CAMPAIGN_LIST_SUCCESS = "CAMPAIGN_LIST_SUCCESS";
export const CAMPAIGN_LIST_FAIL = "CAMPAIGN_LIST_FAIL";

export const CHANGE_TAB = "CHANGE_TAB";

export const campaignsData = () => async(dispatch) => {
    try {
        dispatch({type: CAMPAIGN_LIST_REQUEST});
        const {data}= await axios.get('/api/campaignData');
        console.log(data);
        dispatch({type: CAMPAIGN_LIST_SUCCESS, payload: data});
    } catch (error) {
        dispatch({
            type: CAMPAIGN_LIST_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const tabChange = (index) => {
    return {
        type: CHANGE_TAB,
        payload: index
    }
}
