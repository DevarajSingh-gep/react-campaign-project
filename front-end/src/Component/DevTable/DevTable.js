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
                                        <input className="date-input" type="date" 
                                        dateFormat="yyyy/MM/dd" 
                                        onChange={this.props.changeCampaignDate}/>
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