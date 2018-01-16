import React, { Component } from 'react';

class DeleteAll extends Component {

  render () {
    const { handleDeleteAll } = this.props;
    return (
      <span className="deleteAll">
        <button 
          type="button" 
          className="btn btn-danger btn-lg" 
          onClick={ handleDeleteAll }>Delete all items</button>
      </span>
    );
  }
}

export default DeleteAll;
