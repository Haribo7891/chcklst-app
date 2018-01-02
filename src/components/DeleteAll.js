import React, { Component } from 'react';

class DeleteAll extends Component {

  render () {
    return (
      <span className="deleteAll">
        <button type="button" className="btn btn-danger btn-lg" onClick="">Delete all items</button>
      </span>
    );
  }
}

export default DeleteAll;
