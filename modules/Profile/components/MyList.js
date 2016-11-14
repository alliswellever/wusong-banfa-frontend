import React from 'react';



class MyList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            currentIndex : 0
        }
    }
    
    checkTitle(index){
        return index===this.state.currentIndex ? " active tab-head-title" : "tab-head-title";
    }

    checkContent(index){
        return index===this.state.currentIndex ? "tab-item show" : "tab-item";
    }

    render(){
        return(
            <div className="my-list">
                <div className="myinfo-tab-head">
                    { React.Children.map( this.props.children , (element,index) => {
                        return(
                            /*箭头函数没有自己的this，这里的this继承自外围作用域，即组件本身*/
                            <div onClick={ () => { this.setState({currentIndex : index}) } } className={ this.checkTitle(index) }>{ element.props.name }</div>
                            );
                    }) }
                    <span className="official-number">官方电话：400-010-5353</span>
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



export default MyList;