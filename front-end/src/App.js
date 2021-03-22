import React, { Component } from 'react';
import Container from './Container/Container';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter
} from "react-router-dom";
import './App.css';
import { Redirect } from "react-router-dom";
import spinner from './Component/Spinner/Spinner';

class App extends Component {

  constructor(props) {
      super(props)   
      this.state = {
        tabs: [
            {
                name: 'Upcomming campaigns',
                isActive: true
            },
            {
                name: 'Live campaigns',
                isActive: false
            },
            {
                name: 'Past campaigns',
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
          data:null
      },
      currentDate: new Date().getTime()
    }
    this.activeIndex = 0;
  }

  componentDidMount() {
    console.log('componentDidMount Run');
    axios.get('/api/campaignData').then((res)=>{
      let {tableData} = this.state;
      tableData.data = res.data;
      this.setState({
        tableData: tableData
      })
    })
    .catch(error=>{
      this.setState({
        tableData: []
      })
    })
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
      if( campaignTracker === 1  && this.state.tabs[this.activeIndex].name === 'Upcomming campaigns') {
        return true;
      } else if(campaignTracker === 0  && this.state.tabs[this.activeIndex].name === 'Live campaigns') {
        return true
      } else if(campaignTracker === -1  && this.state.tabs[this.activeIndex].name === 'Past campaigns') {
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

  addNewCampaign = (name, countryCode, date) => {
    console.log(name, countryCode, date);
    let campaignNumber = this.state.tableData.data.length;
    let newCampaign = {
              "id": campaignNumber + 1,
              "name": name,
              "region": countryCode,
              "createdOn": new Date(date).getTime(),
              "price": "Price info of Test Whatsapp",
              "csv": "Some CSV link for Whatsapp",
              "report": "Some report link for Whatsapp",
              "image_url": "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80"
          };
    console.log(newCampaign);
    let [ ...data ] = [...this.state.tableData.data];
    data = [...data, newCampaign];
    console.log(data);
    this.setState({
      tableData: {...this.state.tableData, data: data}
    })

  }

  render() {

    return (
      <Router>
         <Switch>
         <Route path="/login">
           <h1>Hello</h1>
         </Route>
           <Route path="/">
              <div>
                {this.state.tableData.data != null ?<Container tabData={this.state.tabs} 
                tableConfig={this.getDataAccordingToCampaign()} 
                tabClickEvent={this.tabHandlerClick}
                campaignHandler={this.campaignHandler}
                addNewItem={this.addNewCampaign}></Container>: <spinner/>}
              </div>
           </Route>
           
         </Switch>
      </Router>
    );
  }
}

export default App;
