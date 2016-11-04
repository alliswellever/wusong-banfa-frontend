/**
 * Created by yuyongyu on 2016/11/3.
 */
import React from 'react'
import Workflow from './components/Workflow'
import SponsorInfo from './components/SponsorInfo'
import RequirementForm from './components/RequirementForm'
import SubmitBox from './components/SubmitBox'

class ContractReviewForm extends React.Component{
    render(){
        return (
            <div className="requirement-form">
                <Workflow/>
                <SponsorInfo/>
                <RequirementForm>
                    合同审查
                </RequirementForm>
                <SubmitBox/>
            </div>
        )
    }
}

export default ContractReviewForm