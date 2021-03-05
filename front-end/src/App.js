import React, { Component } from 'react';
import Container from './Container/Container';
import './App.css';

class App extends Component {

  constructor(props) {
      super(props)   
      this.state = {
        tabs: [
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
      <div>
        <Container tabData={this.state.tabs} tabClickEvent={this.tabHandlerClick}></Container>
      </div>
    );
  }
}

export default App;
