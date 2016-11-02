import React from 'react'

export default React.createClass({
  render() {
    return (
      <div>
        <h2>{this.props.params.requirementName}</h2>
      </div>
    )
  }
})
