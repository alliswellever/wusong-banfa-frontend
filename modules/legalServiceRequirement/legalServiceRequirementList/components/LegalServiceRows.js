/**
 * Created by yuyongyu on 2016/11/2.
 */
import React from 'react';
import LegalServiceRow from './LegalServiceRow';

class LegalServiceList extends React.Component{
    render(){
        return (
                <div className="legal-service-rows">
                {
                    Array.isArray(this.props.services) ? (this.props.services.map((service,index) => {
                        return <LegalServiceRow key={index} {...service}/>
                    })) : <LegalServiceRow {...this.props.services}/>
                }
            </div>
        )
    }
}

export default LegalServiceList;