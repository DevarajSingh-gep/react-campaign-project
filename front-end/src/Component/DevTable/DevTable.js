import React ,{ Component } from 'react';
import './DevTable.scss';

class DevTable extends Component {

    doubleText = (data) => {
            return (
                <>
                    {
                        data.image_url?
                            <img src={data.image_url} />
                        :null
                    }
                    <div className="upper-text">{data.name}</div>
                    <div className="lower-text">{data.region}</div>
                </>
            )
    }

    dateToTime = (date) => {
        var minutes = date.getMinutes();
        var hours = date.getHours() % 12;
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours ? hours : 12;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        return strTime;
    }

    dateToTimestemp =() => {
        let days = Math.floor(Math.random() * 10); 
        let date = new Date(Date.now() - (days * 24 * 60 * 60 * 1000));
        let month = date.getMonth();
        let day = date.getDate();
        let year = date.getFullYear();
        let today = year + '-' + month + '-' + day;
        return new Date(today).getTime();
    }

    digitToDateAndTime = (digits) => {
        var date = new Date(parseInt(digits));
        return {name: date.toDateString(), region: this.dateToTime(date)};
    }

    showAlert = (message) => {
        alert(message);
    }

    svgText = (texts) => {
        return (
            <div>
                { 
                texts.svgName === 'dollar'?<span>$</span> 
                : texts.svgName === 'file' ? <span>file</span>
                : texts.svgName === 'report'? <span>report</span>
                : texts.svgName === 'date' ? <span>date</span>: null 
                }
                <span>{texts.value}</span>
            </div>
        )
    }

    handleChange =(event) => {
        console.log(event.target.value); 
        }
    
    render() {
        const tableData = {
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
                "name": "Test Whatsapp",
                "region": "US",
                "createdOn": 1559807714999,
                "price": "Price info of Test Whatsapp",
                "csv": "Some CSV link for Whatsapp",
                "report": "Some report link for Whatsapp",
                "image_url":"https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80" 
              },
              {
                "name": "Super Jewels Quest",
                "region": "CA, FR",
                "createdOn": 1559806715124,
                "price": "Price info of Super Jewels Quest",
                "csv": "Some CSV link for Super Jewels Quest",
                "report": "Some report link for Super Jewels Ques",
                "image_url":"https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80"
              },
              {
                "name": "Mole Slayer",
                "region": "FR",
                "createdOn": 1559806711124,
                "price": "Price info of Mole Slayer",
                "csv": "Some CSV link for Mole Slayer",
                "report": "Some report link for Mole Slayer",
                "image_url":"https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80"
              },
              {
                "name": "Mancala Mix",
                "region": "JP",
                "createdOn": 1559806680124,
                "price": "Price info of Mancala Mix",
                "csv": "Some CSV link for Mancala Mix",
                "report": "Some report link for Mancala Mix",
                "image_url":"https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80"
              }
            ]
        };
        console.log(this.dateToTimestemp()/1000);

        return(
            <table className="dev-table">
                <thead>    
                    <tr>
                        {
                            tableData.header.map(headerData=>(
                                <th className="header-cell">{headerData.name}</th>
                            ))
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        tableData.data.map((data)=>(
                            <tr>
                                <td className="column-cell">
                                    {
                                        this.doubleText(this.digitToDateAndTime(data.createdOn))
                                    }
                                </td>
                                <td className="column-cell">
                                    {
                                        this.doubleText(data)
                                    }
                                </td>
                                <td className="column-cell">
                                    <div className="icon-text" onClick={() => this.showAlert(data.price)}>View Pricing</div>
                                </td>
                                <td className="column-cell">
                                    <div className="icon-text" onClick={() => this.showAlert(data.csv)}>CSV</div>
                                    <div className="icon-text" onClick={() => this.showAlert(data.report)}>REPORT</div>
                                    <div className="icon-text">
                                        SCHEDULE AGAIN
                                        <input className="date-input" type="date" 
                                        dateFormat="yyyy/MM/dd" 
                                        onChange={this.handleChange}/>
                                    </div>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        );
    }
}

export default DevTable;