import React from 'react';
import { Link } from 'react-router';

var helpData = [
    {
        id:"1",
        title:"无讼办法企业法务事物全能管家帮助中心常见问题1"
    },
    {
        id:"2",
        title:"无讼办法企业法务事物全能管家帮助中心常见问题2"
    },
    {
        id:"3",
        title:"无讼办法企业法务事物全能管家帮助中心常见问题3"
    },
    {
        id:"4",
        title:"无讼办法企业法务事物全能管家帮助中心常见问题4"
    },
    {
        id:"5",
        title:"无讼办法企业法务事物全能管家帮助中心常见问题5"
    },
    {
        id:"6",
        title:"无讼办法企业法务事物全能管家帮助中心常见问题6"
    },
    {
        id:"7",
        title:"无讼办法企业法务事物全能管家帮助中心常见问题7"
    },
    {
        id:"8",
        title:"无讼办法企业法务事物全能管家帮助中心常见问题8"
    },
    {
        id:"9",
        title:"无讼办法企业法务事物全能管家帮助中心常见问题9"
    },
    {
        id:"10",
        title:"无讼办法企业法务事物全能管家帮助中心常见问题10"
    }
];

let hostUrl = 'http://localhost:8080/#/'




function openLink(url) {
    location.href = url;
}

class  HelpComponent extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(<div>
                <ul className="help-list-content">
                    {helpData.map((item , index) => {
                        return (<li key={item.id}><Link to={'/profile/helps/' + item.id}><span className="icon"></span>{item.title}</Link></li>)
                    })}
                </ul>
            </div>);
    }
}

export default HelpComponent;  