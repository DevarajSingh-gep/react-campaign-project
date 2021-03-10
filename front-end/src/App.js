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
        ],
        tableData: {
          header: [
              {
                  name: 'Date'
              },
              {
                  name: 'Campaign'
              },
              {
                  name: 'View'
              },
              {
                  name: 'Action'
              }
          ],
          data:[{
              "id": 1,
              "name": "Test Whatsapp",
              "region": "US",
              "createdOn": 1615982744000,
              "price": "Price info of Test Whatsapp",
              "csv": "Some CSV link for Whatsapp",
              "report": "Some report link for Whatsapp",
              "image_url":"https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80" 
            },
            {
              "id": 2,
              "name": "Super Jewels Quest",
              "region": "CA, FR",
              "createdOn": 1615982744000,
              "price": "Price info of Super Jewels Quest",
              "csv": "Some CSV link for Super Jewels Quest",
              "report": "Some report link for Super Jewels Ques",
              "image_url":"https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80"
            },
            {
              "id": 3,
              "name": "Mole Slayer",
              "region": "FR",
              "createdOn": 1615982744000,
              "price": "Price info of Mole Slayer",
              "csv": "Some CSV link for Mole Slayer",
              "report": "Some report link for Mole Slayer",
              "image_url":"https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80"
            },
            {
              "id": 4,
              "name": "Mancala Mix",
              "region": "JP",
              "createdOn": 1610280344000,
              "price": "Price info of Mancala Mix",
              "csv": "Some CSV link for Mancala Mix",
              "report": "Some report link for Mancala Mix",
              "image_url":"https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80"
            },
            {
              "id": 5,
              "name": "Mancala Mix",
              "region": "JP",
              "createdOn": 1610885144000,
              "price": "Price info of Mancala Mix",
              "csv": "Some CSV link for Mancala Mix",
              "report": "Some report link for Mancala Mix",
              "image_url":"https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80"
            },
            {
              "id": 6,
              "name": "Mancala Mix",
              "region": "JP",
              "createdOn": 1615377944000,
              "price": "Price info of Mancala Mix",
              "csv": "Some CSV link for Mancala Mix",
              "report": "Some report link for Mancala Mix",
              "image_url":"https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80"
            }
          ]
      },
      currentDate: new Date().getTime()
    }
    this.activeIndex = 0;
  }

  tabHandlerClick = (selectedtab, index) => {
      const {tabs} = {...this.state}
      tabs.map((tab, i)=>{
          if(tabs[i].isActive) {
              tabs[i].isActive = false;
          }
          if(i === index) {
              tabs[i].isActive = true;
              this.activeIndex = i;
          }
      });
      console.log(tabs);
      this.setState({tabs: tabs});
  }

  findTheCampaignDay = (data)=> {
      // let time =(this.state.currentDate - data.createdOn) / (24 * 60 * 60 * 1000);
      let campaingTracker;
      let today = new Date();
      let campaignDate = new Date(data.createdOn);
      let todayMonth = today.getMonth()
      let campaignMonth = campaignDate.getMonth()
      let todayDate = today.getDate()
      let campaignday = campaignDate.getDate()
        if(todayMonth > campaignMonth) {
          campaingTracker = -1;
        }else  if(todayMonth === campaignMonth) {
          if(todayDate > campaignday) {
            campaingTracker = -1;
          } else if(todayDate === campaignday) {
            campaingTracker = 0;
          } else {
            campaingTracker = 1;
          }
        } else {
          campaingTracker = 1;
        }
        return campaingTracker;
  }

  getDataAccordingToCampaign = () => {
    let tempCampaignData = this.state.tableData.data.filter((data)=>{
      const campaignTracker = this.findTheCampaignDay(data);
      if( campaignTracker === 1  && this.state.tabs[this.activeIndex].name === 'Upcomming Compaigns') {
        return true;
      } else if(campaignTracker === 0  && this.state.tabs[this.activeIndex].name === 'Live Compaigns') {
        return true
      } else if(campaignTracker === -1  && this.state.tabs[this.activeIndex].name === 'Past Compaigns') {
        return true
      }
    })
    return {
      header: this.state.tableData.header,
      data: tempCampaignData
    }
  }

  campaignHandler = (event, id) => {
    console.log(event.target.value, "id", id); 
    let modifiedData = [...this.state.tableData.data];
    modifiedData[id - 1].createdOn = new Date(event.target.value).getTime();
    this.setState(modifiedData);
  }

  render() {

    return (
      <div>
        <Container tabData={this.state.tabs} 
        tableConfig={this.getDataAccordingToCampaign()} 
        tabClickEvent={this.tabHandlerClick}
        campaignHandler={this.campaignHandler}></Container>
      </div>
    );
  }
}

export default App;
