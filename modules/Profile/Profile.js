import '../../public/css/profile.scss'

import React from 'react';
import MyList from './components/MyList.js';

import MyTable from './components/MyTable.js';
import ModifyInfo from './components/ModifyInfo.js'
import HelpComponent from './components/HelpComponent.js'
import Pagination from '../components/Pagination.js'


let billData = 
{"list": [
  {
    "packageOrderId": "9a5a4751-a500-11e6-b40f-88cf77e71fe6",
    "purchaseTime": "2016年11月07日",
    "validityDays": "12个月",
    "activationTime": "2016年11月07日",
    "expirationDays": 332,
    "comment": "年度综合服务包(180+180)"
  },
  {
    "packageOrderId": "9a5a4751-a500-11e6-b40f-88cf77e71fe7",
    "purchaseTime": "2016年11月07日",
    "validityDays": "12个月",
    "activationTime": "2016年11月07日",
    "expirationDays": 332,
    "comment": "年度综合服务包(180+180)"
  },
  {
    "packageOrderId": "9a5a4751-a500-11e6-b40f-88cf77e71fe8",
    "purchaseTime": "2016年11月07日",
    "validityDays": "12个月",
    "activationTime": "2016年11月07日",
    "expirationDays": 332,
    "comment": "年度综合服务包(180+180)"
  }
],
"page": {
  "pageNo": 1,
  "pageCount": 1,
  "pageNoList": [
    1
  ]
}
}


class  MyInfo extends React.Component{
    
    

    render(){
        return(<div>
                <MyList>
                    <div name="账单管理">
                        <div className="table-item"><MyTable data={billData.list}/></div>
                        <div className="pagination-cell"><Pagination/></div>
                    </div>
                    <div name="账号资料设置">
                        <div className="inform-content">
                            <ModifyInfo/>
                        </div>
                    </div>
                    <div name="帮助">
                        <HelpComponent/>
                    </div>
                </MyList>
            </div>);
    }
}

export default MyInfo;  