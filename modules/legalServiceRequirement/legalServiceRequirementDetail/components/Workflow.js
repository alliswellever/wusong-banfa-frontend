/**
 * Created by yuyongyu on 2016/11/4.
 */
import React from 'react';

class Workflow extends React.Component{
    render(){
        return (
            <div className="workflow">
                <div className="node edit">
                    <img src="/img/edit.png"/>
                    <div>
                        1分钟填写需求
                    </div>
                </div>
                <div className="node communicate">
                    <img src="/img/communicate.png"/>
                    <div>
                        顾问接洽、沟通
                    </div>
                </div>
                <div className="node complete">
                    <img src="/img/complete.png"/>
                    <div>
                        律师完成工作
                    </div>
                </div>
            </div>
        )
    }
}

export default Workflow;