import React from 'react';
import { Pagination } from 'react-bootstrap';

const PaginationAdvanced = React.createClass({
  getInitialState() {
    return {
      activePage: 1
    };
  },

  handleSelect(eventKey) {
    this.setState({
      activePage: eventKey
    });
  },

  render() {
    return (
      <Pagination
        prev
        next
        ellipsis
        boundaryLinks
        items={10}
        maxButtons={2}
        activePage={this.state.activePage}
        onSelect={this.handleSelect} />
    );
  }
});

export default PaginationAdvanced;