import React, { Component } from 'react';

class ListItem extends Component {

  handleRemoveClick = (event) => {
    event.preventDefault()
    this.props.handleRemoveItem(this.props.item.id)
  }

  render () {
    const { item: { id, name, checked } } = this.props;
    return (
      <div className="items">
        <li className="list-group-item d-flex justify-content-between align-items-center">
          <div className="form-check">
            <label className="form-check-label">
              <input className="form-check-input" type="checkbox" value={ id } checked={ checked } onChange={ this.handleToggleClick }/>{ name }
            </label>
          </div>
          <button type="button" className="btn btn-outline-danger btn-sm" onClick={ this.handleRemoveClick }>Remove</button>
        </li>
      </div>
    );
  }
}

export default ListItem;
