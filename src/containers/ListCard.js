import React, { Component } from 'react';
import { ListItem } from '../components';

class ListCard extends Component {

  render () {
    return (
      <div className="card border-success mb-3">
        <div className="card-header">
          <div className="header">Checklist Items ( count of items )</div>
        </div>
        <div className="card-body text-success">
          <ul className="list-group" key="">
            <ListItem />
            <ListItem />
          </ul>
        </div>
      </div>
    );
  }
}

export default ListCard;
