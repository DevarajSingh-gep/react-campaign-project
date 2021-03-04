import React, { Component } from 'react'
import './Devtabs.scss';

class DevTabs extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            tabs:  [
                {
                    name: 'Upcomming Compaigns',
                    isActive: true
                },
                {
                    name: 'Live Compaigns',
                    isActive: false
                },
                {
                    name: 'Past Compaigns',
                    isActive: false
                }
            ]
        }
    }

    tabHandlerClick = (selectedtab, index) => {
        const {tabs} = {...this.state}
        tabs.map((tab, i)=>{
            if(tabs[i].isActive) {
                tabs[i].isActive = false;
            }
            if(i === index) {
                tabs[i].isActive = true;
            }
        });
        console.log(tabs);
        this.setState({tabs: tabs});
    }
    
    render() {
        
        return (
            <div className="dev-tabs-container">
                <ul className="tabs-wrapper">
                    { this.state.tabs.map( (tab, index)=> (
                            <li key={tab.name} className={ tab.isActive ? "tab active" : "tab" } 
                            onClick={ () => this.tabHandlerClick(tab, index) }> 
                                {tab.name}
                            </li>
                        ) 
                     )}
                </ul>
            </div>
        );
    }

}

export default DevTabs;