import React ,{ Component } from 'react';
import './DevTable.scss';

class DevTable extends Component {

    doubleText = (texts) => {
            return (
                <div className="double-text-container">
                    {
                        texts.imgPath?
                        <span className="image-section">
                            <img className="double-text-img" src={texts.imgPath} />
                        </span>:null
                    }
                    <span className="upper-text">{texts.upperData}</span>
                    <span className="lower-text">{texts.lowerData}</span>
                </div>
            )
    }

    svgText = (texts) => {
        return (
            <div>
                {texts.svgName === 'dollar'?<span>$</span> 
                : texts.svgName === 'file' ? <span>file</span>
                : texts.svgName === 'report'? <span>report</span>
                : texts.svgName === 'date' ? <span>date</span>: null }
                <span>{texts.value}</span>
            </div>
        )
    }
    
    render() {
        const tableData = {
            header: [
                {
                    name: 'Date',
                    field: 'date',
                },
                {
                    name: 'Campaign',
                    field: 'date',
                },
                {
                    name: 'View',
                    field: 'date',
                },
                {
                    name: 'Action',
                    field: 'date',
                }
            ],
            data:[
                {
                    date: {
                        value: {
                            upperData: 'Rahul',
                            lowerData: 'singh',
                            imgPath: ''
                        }
                    },
    
                },
            ]
        };

        return(
            <table className="DevTable">
                <thead>
                    <tr>
                        {
                            tableData.header.map(headerData=>(
                                <th>{headerData.name}</th>
                            ))
                        }
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {
                            tableData.data.map((data, index)=>(
                                tableData.header.map((header)=>(
                                    <td>
                                        {this.doubleText(data[header.field].value)}
                                        
                                    </td>
                                ))
                            ))
                        }
                    </tr>
                </tbody>
            </table>
        );
    }
}

export default DevTable;