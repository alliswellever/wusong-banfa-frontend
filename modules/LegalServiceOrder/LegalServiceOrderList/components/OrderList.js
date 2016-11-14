import React from 'react';


let TabHeadData = [{
    "class": "tab-button button-bgcolor-blue",
        "text" : "全部"
    },{
        "class": "tab-button button-bgcolor-green",
        "text" : "无讼顾问确认中"
    },{
        "class": "tab-button button-bgcolor-yellow",
        "text" : "服务进行中"
    },{
        "class": "tab-button button-bgcolor-purple",
        "text" : "待确认完成"
    },{
        "class": "tab-button button-bgcolor-red",
        "text" : "已取消"
    },{
        "class": "tab-button button-bgcolor-grey",
        "text" : "已完成"
}];


class OrderList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            currentIndex : 0
        }
    }
    
    checkTitle(index){
        return index===this.state.currentIndex ? " active" : " ";
    }

    checkContent(index){
        return index===this.state.currentIndex ? "tab-item show" : "tab-item";
    }

    render(){
        return(
            <div className="order-list">
                <div className="tab-head">
                    {this.props.statistics.map((item, index) => {
                        var content = TabHeadData[index];
                        return (<div onClick={
                            () =>{
                            this.setState({currentIndex: index});
                            // this.props.change(index);
                            // console.log("click" , index);
                            // this.callMethodOnProps("change" , index);
                            }} key={index} className={content.class + this.checkTitle(index)} key={item.orderStatus}>
                            <p className="tab-button-count">{item.count}</p>
                            <p className="tab-button-title">{content.text}</p>
                        </div>
                        )
                    })}
                </div>
                <div className="Tab_item_wrap">
                    {React.Children.map(this.props.children , (element , index) => {
                        return (<div className={this.checkContent(index)}>
                                {element}</div>)
                    })}
                </div>
            </div>
        )
    }
}



export default OrderList;