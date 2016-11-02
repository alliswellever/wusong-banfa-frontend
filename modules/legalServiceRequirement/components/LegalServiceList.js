/**
 * Created by yuyongyu on 2016/11/2.
 */
import React from 'react';
import LegalService from './LegalService';

class LegalServiceList extends React.Component{
    render(){
        return (
            <div className="legal-service-list">
                <LegalService/>
                <LegalService/>
                <LegalService/>
                <LegalService/>
                <LegalService/>
            </div>
        )
    }
}

export default LegalServiceList;