import React from 'react';



class MyTable extends React.Component{

    render(){
        return(
            <table className="my-table">
                <thead>
                    <tr className="my-table-th">
                        <th>付款日期</th>
                        <th>额度</th>
                        <th>激活日期</th>
                        <th>剩余额度</th>
                        <th>备注</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.data.map((item , index) => {
                        return (<tr key={item.packageOrderId}>
                                    <td>{item.purchaseTime}</td>
                                    <td>{item.validityDays}</td>
                                    <td>{item.activationTime}</td>
                                    <td>{item.expirationDays}</td>
                                    <td>{item.comment}</td>
                                </tr>)
                            })
                    }
                </tbody>
            </table>
        )
    }
}




export default MyTable;