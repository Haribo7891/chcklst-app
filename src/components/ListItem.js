import React, { Component } from 'react';

class ListItem extends Component {

  render () {
    return (
      <div className="items">
        <li className="list-group-item d-flex justify-content-between align-items-center">
          <div className="form-check">
            <label className="form-check-label">
              <input className="form-check-input" type="checkbox" value="" checked="" onChange=""/>Item 1
            </label>
          </div>
          <button type="button" className="btn btn-outline-danger btn-sm" onClick="">Remove</button>
        </li>
      </div>
    );
  }
}

export default ListItem;
