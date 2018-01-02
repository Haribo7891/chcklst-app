import React, { Component } from 'react';

class ListCard extends Component {

  render () {
    return (
      <div className="card border-success mb-3">
        <div className="card-header">
          <div className="header">Checklist Items ( count of items )</div>
        </div>
        <div className="card-body text-success">
          <ul className="list-group" key="">
            <div className="items">
              <li className="list-group-item d-flex justify-content-between align-items-center">
                <div className="form-check">
                  <label className="form-check-label">
                    <input className="form-check-input" type="checkbox" value="" checked="" onChange=""/> Item 1
                  </label>
                </div>
                <button type="button" className="btn btn-outline-danger btn-sm" onClick="">Remove</button>
              </li>
            </div>
            <div className="items">
              <li className="list-group-item d-flex justify-content-between align-items-center">
                <div className="form-check">
                  <label className="form-check-label">
                    <input className="form-check-input" type="checkbox" value="" checked="" onChange=""/> Item 2
                  </label>
                </div>
                <button type="button" className="btn btn-outline-danger btn-sm" onClick="">Remove</button>
              </li>
            </div>
          </ul>
        </div>
      </div>
    );
  }
}

export default ListCard;
