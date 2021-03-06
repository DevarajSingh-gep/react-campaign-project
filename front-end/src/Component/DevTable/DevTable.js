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

    timeDifference = (previous) => {
        var current = new Date();
        var msPerMinute = 60 * 1000;
        var msPerHour = msPerMinute * 60;
        var msPerDay = msPerHour * 24;
        var msPerMonth = msPerDay * 30;
        var msPerYear = msPerDay * 365;
    
        var elapsed = current - previous;
    
        if (elapsed < msPerMinute) {
             return Math.round(elapsed/1000) + ' seconds ago';   
        }
    
        else if (elapsed < msPerHour) {
             return Math.round(elapsed/msPerMinute) + ' minutes ago';   
        }
    
        else if (elapsed < msPerDay ) {
             return Math.round(elapsed/msPerHour ) + ' hours ago';   
        }
    
        else if (elapsed < msPerMonth) {
            return Math.round(elapsed/msPerDay) + ' days ago';   
        }
    
        else if (elapsed < msPerYear) {
            return Math.round(elapsed/msPerMonth) + ' months ago';   
        }
    
        else {
            return Math.round(elapsed/msPerYear ) + ' years ago';   
        }
    }

    digitToDateAndTime = (digits) => {
        var date = new Date(parseInt(digits));
        return {name: date.toDateString(), region: this.timeDifference(date)};
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
                "createdOn": 1614699804000,
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
                                        <input className="date-input" type="date" />
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