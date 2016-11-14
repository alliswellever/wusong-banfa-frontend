import '../../../public/css/orderList.scss'

import React from 'react';
import ListItem from './components/ListItem';
import OrderList from './components/OrderList';
import Pagination from '../../components/Pagination';


let data0 = {
    list : [
        {id:"25326536253",
         orderTitle:"合同审查",
         requirementType:"101",
         createDate:"2016-11-01",
         orderStatus:"1",
         completeDate:"2016-11-15"},
        {id:"25326536253",
         orderTitle:"合同起草",
         requirementType:"102",
         createDate:"2016-11-01",
         orderStatus:"2",
         completeDate:"2016-11-15"},
        {id:"25326536253",
         orderTitle:"律师函",
         requirementType:"103",
         createDate:"2016-11-01",
         orderStatus:"3",
         completeDate:"2016-11-15"},
        {id:"25326536253",
         orderTitle:"催收函",
         requirementType:"104",
         createDate:"2016-11-01",
         orderStatus:"4",
         completeDate:"2016-11-15"},
        {id:"25326536253",
         orderTitle:"上门培训",
         requirementType:"105",
         createDate:"2016-11-01",
         orderStatus:"5",
         completeDate:"2016-11-15"},
    ],
    page : {
        pageNo:"1",
        pageCount:"12",
        pageNoList: ["1","2","3","4","5"]
    },
    statistics : [
        {orderStatus:"0",count:"25"},
        {orderStatus:"1",count:"10"},
        {orderStatus:"2",count:"5"},
        {orderStatus:"3",count:"3"},
        {orderStatus:"4",count:"0"},
        {orderStatus:"5",count:"7"},
    ]
};

let data1 = {
    list : [
        {id:"25326536253",
         orderTitle:"合同审查",
         requirementType:"101",
         createDate:"2016-11-01",
         orderStatus:"1",
         completeDate:"2016-11-15"},
        {id:"25326536253",
         orderTitle:"合同起草",
         requirementType:"101",
         createDate:"2016-11-01",
         orderStatus:"1",
         completeDate:"2016-11-15"},
        {id:"25326536253",
         orderTitle:"律师函",
         requirementType:"101",
         createDate:"2016-11-01",
         orderStatus:"1",
         completeDate:"2016-11-15"},
        {id:"25326536253",
         orderTitle:"催收函",
         requirementType:"101",
         createDate:"2016-11-01",
         orderStatus:"1",
         completeDate:"2016-11-15"},
        {id:"25326536253",
         orderTitle:"上门培训",
         requirementType:"101",
         createDate:"2016-11-01",
         orderStatus:"1",
         completeDate:"2016-11-15"},
    ],
    page : {
        pageNo:"1",
        pageCount:"12",
        pageNoList: ["1","2","3","4","5"]
    },
    statistics : [
        {requirementStatus:"0",count:"25"},
        {requirementStatus:"1",count:"10"},
        {requirementStatus:"2",count:"5"},
        {requirementStatus:"3",count:"3"},
        {requirementStatus:"4",count:"0"},
        {requirementStatus:"5",count:"7"},
    ]
};

let data2 = {
    list : [
        {id:"25326536253",
         orderTitle:"合同审查",
         requirementType:"101",
         createDate:"2016-11-01",
         orderStatus:"2",
         completeDate:"2016-11-15"},
        {id:"25326536253",
         orderTitle:"合同起草",
         requirementType:"101",
         createDate:"2016-11-01",
         orderStatus:"2",
         completeDate:"2016-11-15"},
        {id:"25326536253",
         orderTitle:"律师函",
         requirementType:"101",
         createDate:"2016-11-01",
         orderStatus:"2",
         completeDate:"2016-11-15"},
        {id:"25326536253",
         orderTitle:"催收函",
         requirementType:"101",
         createDate:"2016-11-01",
         orderStatus:"2",
         completeDate:"2016-11-15"},
        {id:"25326536253",
         orderTitle:"上门培训",
         requirementType:"101",
         createDate:"2016-11-01",
         orderStatus:"2",
         completeDate:"2016-11-15"},
    ],
    page : {
        pageNo:"1",
        pageCount:"12",
        pageNoList: ["1","2","3","4","5"]
    },
    statistics : [
        {requirementStatus:"0",count:"25"},
        {requirementStatus:"1",count:"10"},
        {requirementStatus:"2",count:"5"},
        {requirementStatus:"3",count:"3"},
        {requirementStatus:"4",count:"0"},
        {requirementStatus:"5",count:"7"},
    ]
};

let data3 = {
    list : [
        {id:"25326536253",
         orderTitle:"合同审查",
         requirementType:"101",
         createDate:"2016-11-01",
         orderStatus:"3",
         completeDate:"2016-11-15"},
        {id:"25326536253",
         orderTitle:"合同起草",
         requirementType:"101",
         createDate:"2016-11-01",
         orderStatus:"3",
         completeDate:"2016-11-15"},
        {id:"25326536253",
         orderTitle:"律师函",
         requirementType:"101",
         createDate:"2016-11-01",
         orderStatus:"3",
         completeDate:"2016-11-15"},
        {id:"25326536253",
         orderTitle:"催收函",
         requirementType:"101",
         createDate:"2016-11-01",
         orderStatus:"3",
         completeDate:"2016-11-15"},
        {id:"25326536253",
         orderTitle:"上门培训",
         requirementType:"101",
         createDate:"2016-11-01",
         orderStatus:"3",
         completeDate:"2016-11-15"},
    ],
    page : {
        pageNo:"1",
        pageCount:"12",
        pageNoList: ["1","2","3","4","5"]
    },
    statistics : [
        {requirementStatus:"0",count:"25"},
        {requirementStatus:"1",count:"10"},
        {requirementStatus:"2",count:"5"},
        {requirementStatus:"3",count:"3"},
        {requirementStatus:"4",count:"0"},
        {requirementStatus:"5",count:"7"},
    ]
};

let data4 = {
    list : [
        {id:"25326536253",
         orderTitle:"合同审查",
         requirementType:"101",
         createDate:"2016-11-01",
         orderStatus:"4",
         completeDate:"2016-11-15"},
        {id:"25326536253",
         orderTitle:"合同起草",
         requirementType:"101",
         createDate:"2016-11-01",
         orderStatus:"4",
         completeDate:"2016-11-15"},
        {id:"25326536253",
         orderTitle:"律师函",
         requirementType:"101",
         createDate:"2016-11-01",
         orderStatus:"4",
         completeDate:"2016-11-15"},
        {id:"25326536253",
         orderTitle:"催收函",
         requirementType:"101",
         createDate:"2016-11-01",
         orderStatus:"4",
         completeDate:"2016-11-15"},
        {id:"25326536253",
         orderTitle:"上门培训",
         requirementType:"101",
         createDate:"2016-11-01",
         orderStatus:"4",
         completeDate:"2016-11-15"},
    ],
    page : {
        pageNo:"1",
        pageCount:"12",
        pageNoList: ["1","2","3","4","5"]
    },
    statistics : [
        {requirementStatus:"0",count:"25"},
        {requirementStatus:"1",count:"10"},
        {requirementStatus:"2",count:"5"},
        {requirementStatus:"3",count:"3"},
        {requirementStatus:"4",count:"0"},
        {requirementStatus:"5",count:"7"},
    ]
};

let data5 = {
    list : [
        {id:"25326536253",
         orderTitle:"合同审查",
         requirementType:"101",
         createDate:"2016-11-01",
         orderStatus:"5",
         completeDate:"2016-11-15"},
        {id:"25326536253",
         orderTitle:"合同起草",
         requirementType:"101",
         createDate:"2016-11-01",
         orderStatus:"5",
         completeDate:"2016-11-15"},
        {id:"25326536253",
         orderTitle:"律师函",
         requirementType:"101",
         createDate:"2016-11-01",
         orderStatus:"5",
         completeDate:"2016-11-15"},
        {id:"25326536253",
         orderTitle:"催收函",
         requirementType:"101",
         createDate:"2016-11-01",
         orderStatus:"5",
         completeDate:"2016-11-15"},
        {id:"25326536253",
         orderTitle:"上门培训",
         requirementType:"101",
         createDate:"2016-11-01",
         orderStatus:"5",
         completeDate:"2016-11-15"},
    ],
    page : {
        pageNo:"1",
        pageCount:"12",
        pageNoList: ["1","2","3","4","5"]
    },
    statistics : [
        {requirementStatus:"0",count:"25"},
        {requirementStatus:"1",count:"10"},
        {requirementStatus:"2",count:"5"},
        {requirementStatus:"3",count:"3"},
        {requirementStatus:"4",count:"0"},
        {requirementStatus:"5",count:"7"},
    ]
};




class ServiceOrderList extends React.Component{
    constructor() {
        super();
        this.state = {
            data:{list:[]}
        }
    }
    typeChange(num){

        console.log("typeChange" , num);
        var currentData;
        switch(num/1){
            case 0:
                currentData = data0;
                break;
            case 1:
                currentData = data1;
                break;
            case 2:
                currentData = data2;
                break;
            case 3:
                currentData = data3;
                break;
            case 4:
                currentData = data4;
                break;
            case 5:
                currentData = data5;
                break;
        }

        this.setState({
            data : currentData
        })
    }
    componentDidMount() {
        this.setState({
            data : data0
        });
    }
    render(){

        let RequestUrl =" /requirementOrders";
        let RequestParams = {
            pageNo: 1, 
            pageSize: 10,
            orderStatus: 0
        };

        return(<OrderList statistics={data0.statistics}>
                    <div>
                        <div className="list-content">
                            {this.state.data.list.map((item , index) => {
                                return (<ListItem key={index} data={item} orderStatu={item.orderStatus}></ListItem>)
                            })}
                        </div>
                        <div className="pagination-cell"><Pagination/></div>
                    </div>
                    <div>
                        <div className="list-content">
                            {data1.list.map((item , index) => {
                                return (<ListItem key={index} data={item} orderStatu={item.orderStatus}></ListItem>)
                            })}
                        </div>
                        <div className="pagination-cell"><Pagination/></div>
                    </div>
                    <div>
                        <div className="list-content">
                            {data2.list.map((item , index) => {
                                return (<ListItem key={index} data={item} orderStatu={item.orderStatus}></ListItem>)
                            })}
                        </div>
                        <div className="pagination-cell"><Pagination/></div>
                    </div>
                    <div>
                        <div className="list-content">
                            {data3.list.map((item , index) => {
                                return (<ListItem key={index} data={item} orderStatu={item.orderStatus}></ListItem>)
                            })}
                        </div>
                        <div className="pagination-cell"><Pagination/></div>
                    </div>
                    <div>
                        <div className="list-content">
                            {data4.list.map((item , index) => {
                                return (<ListItem key={index} data={item} orderStatu={item.orderStatus}></ListItem>)
                            })}
                        </div>
                        <div className="pagination-cell"><Pagination/></div>
                    </div>
                    <div>
                        <div className="list-content">
                            {data5.list.map((item , index) => {
                                return (<ListItem key={index} data={item} orderStatu={item.orderStatus}></ListItem>)
                            })}
                        </div>
                        <div className="pagination-cell"><Pagination/></div>
                    </div>
                </OrderList>);
    }
}

export default ServiceOrderList;  