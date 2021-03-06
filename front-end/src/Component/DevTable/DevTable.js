
const devTable = () => {
    const tableData = {
        header: [
            {
                name: 'Date',
                field: 'date',
            },
            {
                name: 'Date',
                field: 'date',
            },
            {
                name: 'Date',
                field: 'date',
            },
            {
                name: 'Date',
                field: 'date',
            }
        ],
        data:[
            {
                date: {
                    name: 'Oct 2019, 29'
                },

            },
        ]
    }
    const header=[
        {
            name: 'h'
        },
        {
            name: 'h'
        },
        {
            name: 'h'
        }
    ]
    return(
        <table>
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
                            <td>
                                {data[tableData.header[index].field].name}
                            </td>
                        ))
                    }
                </tr>
            </tbody>
        </table>
    );
}

export default devTable;