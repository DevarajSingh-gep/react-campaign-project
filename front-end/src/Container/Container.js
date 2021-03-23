import React, { lazy, Suspense, useEffect} from 'react';
import { Link, Route, Switch, useLocation, Redirect, useRouteMatch } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import './Container.scss';
import DevTabs from '../Component/Devtabs/Devtabs';
import DevTable from '../Component/DevTable/DevTable';
import {campaignsData} from '../Store/Action/CampaignAction';


const CreateComponent = lazy(()=> import('../Component/Create/Create') );

const Container = (props) => {

    // const dispatch = useDispatch();

    // const campaignList = useSelector(state => state.campaignList);

    // const {loading, error, tabs, tableData} = campaignList;

    const location = useLocation();

    // useEffect(()=> {
    //     dispatch(campaignsData());
    //     console.log(loading, error, tabs, tableData);
    // }, [dispatch])

    return (
        <div className="container">
            <header className="header">
                <span className='headerText'>
                    BlueStack
                </span>
                <ul className="header-right">
                    <li>
                        <Link to="/campaigns">
                        Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/create">
                        Create
                        </Link>
                    </li>
                    <li>
                        <Link to="/create">
                        Login
                        </Link>
                    </li>
                </ul>
            </header>
            <div className="body-container">
                <span className="body-header">
                    {location.pathname.split('/')[1] === 'campaigns'? "Manage Campaigns" : ""}
                </span>
                <div className="main-container">
                    <Switch>
                        <Route path="/create">
                            <Suspense fallback={<div>Loading.....</div>}>
                                <CreateComponent createCampaign={props.addNewItem}/>
                            </Suspense>
                        </Route>
                        <Route path="/campaigns" exact>
                            <DevTabs tabData={props.tabData}></DevTabs>
                            {props.tableConfig.data != null ? <DevTable data={props.tableConfig} changeCampaignDate={props.campaignHandler}></DevTable> :"Data Note Found"}
                        </Route>
                        <Redirect from="/" to="/campaigns"/>
                    </Switch>
                </div>
            </div>
        </div>
    );
}

export default Container;