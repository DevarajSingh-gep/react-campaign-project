import './Container.scss';
import DevTabs from '../Component/Devtabs/Devtabs';

const container = () => {

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
                    <DevTabs></DevTabs>
                </div>
            </div>
        </div>
    );
}

export default container;