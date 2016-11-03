import '../../../public/css/legalServiceRequirementList.scss'

import React from 'react'
import NavLink from '../../components/NavLink'

import LegalServiceCategory from './components/LegalServiceCategory'
import LegalServiceTable from './components/LegalServiceTable'
import LegalServiceRows from './components/LegalServiceRows'


class LegalServiceRequirementList extends React.Component{
  constructor(props){
      super(props);
      this.state = {
          onlineServices:{
              name: '线上服务',
              balance: 38,
              services: [
                  {
                      type: 101,
                      name: '合同审查',
                      description: '最快的速度帮你审查合同，帮助企业规避风险。'
                  },
                  {
                      type: 102,
                      name: '合同起草',
                      description: '最快的速度帮你审查合同，帮助企业规避风险。'
                  },
                  {
                      type: 103,
                      name: '法律咨询',
                      description: '最快的速度帮你审查合同，帮助企业规避风险。'
                  },
                  {
                      type: 104,
                      name: '催收函',
                      description: '最快的速度帮你审查合同，帮助企业规避风险。'
                  },
                  {
                      type: 105,
                      name: '律师函',
                      description: '最快的速度帮你审查合同，帮助企业规避风险。'
                  }

              ]
          },
          offlineServices:{
              name: '线下服务',
              balance: 8,
              services: [
                  {
                      type: 201,
                      name: '上门培训',
                      description: '最快的速度帮你审查合同，帮助企业规避风险。'
                  },
                  {
                      type: 202,
                      name: '陪同谈判',
                      description: '最快的速度帮你审查合同，帮助企业规避风险。'
                  },
                  {
                      type: 203,
                      name: '法律见证',
                      description: '最快的速度帮你审查合同，帮助企业规避风险。'
                  },
                  {
                      type: 204,
                      name: '面对面咨询',
                      description: '最快的速度帮你审查合同，帮助企业规避风险。'
                  }
              ]
          },
          adviserServices: {
              services:[
                  {
                      type: 301,
                      name: '不清楚，让顾问帮我选择',
                      description: '服务内容不限，如请律师打官司、股权设计方案、书屋方案设计、匹配律师、寻找服务机构最快的速度帮你审查合同，帮助企业规避风险。协助分析问题、匹配律师、寻找服务机构并监督服务完成，但各项服务成本需由企业另行承担。'
                  }
              ]
          }
      }

  }

  render() {
    return (
      <div className="requirements">
          <LegalServiceCategory name="套餐内计次服务" desc="请填写需求单，说明您的需求，无讼顾问对接合适的律师为您服务。"/>
          <LegalServiceTable services={this.state.onlineServices}/>
          <LegalServiceTable services={this.state.offlineServices}/>
          <LegalServiceCategory name="无讼顾问管家服务" desc="无讼顾问作为企业法务全能管家，不限次数对接企业各项法律需求，协助分析问题、匹配律师、寻找服务机构并监督服务完成，但各项服务成本需由企业另行承担。"/>
          <LegalServiceTable services={this.state.adviserServices}/>
      </div>
    )
  }
}

export default LegalServiceRequirementList