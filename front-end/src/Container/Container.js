import './Container.scss';
import DevTabs from '../Component/Devtabs/Devtabs';
import DevTable from '../Component/DevTable/DevTable';

const container = (props) => {
    console.log(props.tableConfig);
    return (
        <div className="container">
            <header className="header">
                <span className='headerText'>
                    BlueStack
                </span>
            </header>
            <div className="body-container">
                <span className="body-header">
                    Manage Campaigns
                </span>
                <div className="main-container">
                    <DevTabs tabData={props.tabData} selectedTab={props.tabClickEvent}></DevTabs>
                    <DevTable data={props.tableConfig} changeCampaignDate={props.campaignHandler}></DevTable>
                </div>
            </div>
        </div>
    );
}

export default container;