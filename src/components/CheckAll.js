import React, { Component } from 'react';

class CheckAll extends Component {

  render () {
    const { handleCheckAll } = this.props;
    return (
      <span className="checkAll">
        <button 
          type="button" 
          className="btn btn-primary btn-lg" 
          onClick={ handleCheckAll }>Check all items</button>
      </span>
    );
  }
}

export default CheckAll;
