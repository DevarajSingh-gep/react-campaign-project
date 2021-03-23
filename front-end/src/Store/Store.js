import { createStore, combineReducers, applyMiddleware } from 'redux';
import { campaignReducer } from './Reducer/CampaignReducer';
import thunk  from 'redux-thunk';

const reducer = combineReducers({
    campaignList: campaignReducer
})

const initialState = {};
const middleWare = [thunk];
const store = createStore(reducer, initialState, applyMiddleware(...middleWare));

export default store;