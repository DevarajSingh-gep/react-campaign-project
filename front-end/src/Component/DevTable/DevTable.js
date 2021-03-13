import React ,{ Component } from 'react';
import './DevTable.scss';

class DevTable extends Component {

    constructor(props) {
        super(props)
        console.log(props);
    }

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
        var presentOrFuture = ""
    
        var elapsed = current - previous;
    
        elapsed > 0 ? presentOrFuture = "ago" : elapsed < 0 ? presentOrFuture = "within" : presentOrFuture = "today"
        
        elapsed = Math.abs(elapsed);

        if (elapsed < msPerMinute) {
             return Math.round(elapsed/1000) + ' seconds ' + presentOrFuture;   
        }
    
        else if (elapsed < msPerHour) {
             return Math.round(elapsed/msPerMinute) + ' minutes ' + presentOrFuture;   
        }
    
        else if (elapsed < msPerDay ) {
             return Math.round(elapsed/msPerHour ) + ' hours ' + presentOrFuture; 
        }
    
        else if (elapsed < msPerMonth) {
            return Math.round(elapsed/msPerDay) + ' days ' + presentOrFuture;   
        }
    
        else if (elapsed < msPerYear) {
            return Math.round(elapsed/msPerMonth) + ' months ' + presentOrFuture;   
        }
    
        else {
            return Math.round(elapsed/msPerYear ) + ' years ' + presentOrFuture;   
        }
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

    handleChange =(event) => {
        console.log(event.target.value); 
        }
    
    render() {

        return(
            <table className="dev-table">
                <thead>    
                    <tr>
                        {
                            this.props.data.header.map(headerData=>(
                                <th className="header-cell">{headerData.name}</th>
                            ))
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.data.data.map((data)=>(
                            <tr>
                                <td className="column-cell">
                                    {
                                        this.doubleText(this.digitToDateAndTime(data.createdOn))
                                    }
                                </td>
                                <td className="column-cell width-20">
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
                                        <input className="date-input" type="date"  value={new Date(data.createdOn)}
                                        onChange={(event)=>this.props.changeCampaignDate(event, data.id)}/>
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