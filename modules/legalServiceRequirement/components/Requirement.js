/**
 * Created by yuyongyu on 2016/11/2.
 */
import '../../../public/requirement.scss'

import React from 'react';

class Requirement extends React.Component{
    render(){
        return (
            <div className="requirement">
                <div className="title"><span className="icon"></span>合同审查</div>
                <div className="desc">服务内容：非常牛逼！</div>
                <button>发布需求</button>
            </div>
        )
    }
}

export default Requirement;