import React, { Component } from 'react';

class CheckAll extends Component {

  render () {
    return (
      <span className="checkAll">
        <button type="button" className="btn btn-primary btn-lg" onClick={ this.props.handleCheckAll }>Check all items</button>
      </span>
    );
  }
}

export default CheckAll;
