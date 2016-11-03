/**
 * Created by yuyongyu on 2016/10/31.
 */
import React from 'react'

export default React.createClass({
    render() {
        return (
            <header>
                <div className="logo">
                    <img src="img/logo.png"/>
                    <span className="slogan">
                        企业法务事务<br/>全能管家
                    </span>
                </div>
                <div className="balance">
                    服务余额：40次／剩余时间：10天
                </div>
                <div className="button login-out">退出登录</div>
                <div className="button adviser">
                    <span className="name">联系顾问：王英</span>
                </div>

            </header>
        );
    }
})
