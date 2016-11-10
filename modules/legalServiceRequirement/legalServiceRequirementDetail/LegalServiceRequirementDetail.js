import '../../../public/css/legalServiceRequirementDetail.scss'

import React from 'react'
import { browserHistory } from 'react-router'
import ContractReviewForm from './ContractReviewForm'
import ContractCreationForm from './ContractCreationForm'
import LegalConsultationForm from './LegalConsultationForm'
import CollectionLetterForm from './CollectionLetterForm'
import LawyerLetterForm from './LawyerLetterForm'
import OfflineServiceForm from './OfflineServiceForm'


class LegalServiceRequirementDetail extends React.Component{
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    browserHistory.push('/requirements')
  }

  render() {
    const serviceTypeNameMap = {
      '101':'合同审查',
      '102':'合同起草',
      '103':'法律咨询',
      '104':'催收函',
      '105':'律师函',
      '201':'上门服务',
      '202':'陪同谈判',
      '203':'法律见证',
      '204':'面对面咨询',
      '301':'顾问管家服务'
    };
    const offlineServiceTypes = ['201', '202', '203', '204', '301']

    let serviceForm
    const serviceName = serviceTypeNameMap[this.props.params.requirementType]

    const requirementType = this.props.params.requirementType
    if(requirementType === '101'){
      serviceForm = <ContractReviewForm requirementType={requirementType}/>
    }else if(requirementType === '102'){
      serviceForm = <ContractCreationForm requirementType={requirementType}/>
    }else if(requirementType === '103'){
      serviceForm = <LegalConsultationForm requirementType={requirementType}/>
    }else if(requirementType === '104'){
      serviceForm = <CollectionLetterForm requirementType={requirementType}/>
    }else if(requirementType === '105'){
      serviceForm = <LawyerLetterForm requirementType={requirementType}/>
    }else if(offlineServiceTypes.indexOf(requirementType) !== -1){
      serviceForm = <OfflineServiceForm requirementType={requirementType}/>
    }else{
      //TODO 判断requirementType非法的情况！！！

    }

    return (
      <div className="service-requirement-detail">
        <div className="requirement-header">
          发起需求：{serviceName} <span className="form-close" onClick={this.handleClick}></span>
        </div>
        {serviceForm}
      </div>
    )
  }

}

export default LegalServiceRequirementDetail