import React, { lazy, Suspense} from 'react';
import { Link, Route, Switch, useLocation, Redirect } from "react-router-dom";
import './Container.scss';
import DevTabs from '../Component/Devtabs/Devtabs';
import DevTable from '../Component/DevTable/DevTable';


const CreateComponent = lazy(()=> import('../Component/Create/Create') );

const Container = (props) => {
    console.log(props.tableConfig);
    const location = useLocation();
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
                            <DevTabs tabData={props.tabData} selectedTab={props.tabClickEvent}></DevTabs>
                            <DevTable data={props.tableConfig} changeCampaignDate={props.campaignHandler}></DevTable>
                        </Route>
                        <Redirect from="/" to="/campaigns"/>
                    </Switch>
                </div>
            </div>
        </div>
    );
}

export default Container;