import React from 'react';
import ModifyPasswordModal from './ModifyPasswordModal';

class ModifyInfo extends React.Component{

    render(){
        return(
            <div className="modify-content">
                <div className="detail-content-header modify-info-header">
                    <div className="modify-name">修改联系人姓名</div>
                </div>
                <div className="modify-text">
                    <span>姓名：</span>
                    <span>陶子</span>
                </div>
                <div className="detail-content-header modify-info-header">
                    <div className="modify-name">修改密码</div>
                </div>
                <ModifyPasswordModal/>
            </div>
        )
    }
}


export default ModifyInfo;