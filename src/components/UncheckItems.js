import React, { Component } from 'react';

class UncheckItems extends Component {

  render () {
    return (
      <span className="uncheck">
        <button type="button" className="btn btn-primary btn-lg" onClick="">Uncheck all items</button>
      </span>
    );
  }
}

export default UncheckItems;
