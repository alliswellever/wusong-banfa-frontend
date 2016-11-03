/**
 * Created by yuyongyu on 2016/11/2.
 */
import React from 'react';
import ButtonLink from '../../../components/ButtonLink'


class LegalService extends React.Component{
    render(){
        return (
            <div className="legal-service-row">
                <div className="title"><span className="icon"></span>{this.props.name}</div>
                <div className="desc">{this.props.description}</div>
                <ButtonLink className="button" link={'/requirements/requirement/' + this.props.type}>发布需求</ButtonLink>
            </div>
        )
    }
}

export default LegalService;