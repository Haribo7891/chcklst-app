import React, { Component } from 'react';

class UncheckItems extends Component {

  render () {
    const { handleUncheckItems } = this.props;
    return (
      <span className="uncheck">
        <button 
          type="button" 
          className="btn btn-primary btn-lg" 
          onClick={ handleUncheckItems }>Uncheck all items</button>
      </span>
    );
  }
}

export default UncheckItems;
