/**
 * Created by yuyongyu on 2016/11/2.
 */
import '../../../public/requirementList.scss'


import React from 'react';
import LegalServiceSummary from './LegalServiceSummary';
import LegalServiceList from './LegalServiceList';

class LegalServiceBox extends React.Component{
    render(){
        return (
            <div className="legal-service-box">
                <LegalServiceSummary/>
                <LegalServiceList/>
            </div>
        )
    }
}

export default LegalServiceBox;