import React, { Component } from 'react';
import { ListItem } from '../components';

class ListCard extends Component {

  render () {
    const { items, title, header } = this.props;
    const count = items.length;
    return (
      <div className="card border-success mb-3">
        <div className="card-header">
          <div className="header">{ title } Items ({ count })</div>
          { count === 0 ? '' : <p className="card-text">{ header }</p> }
        </div>
        <div className="card-body text-success">
          {items.map((item) => (
            <ul className="list-group" key={ item.id }>
              <ListItem 
                item={ item }
                handleRemoveItem={ this.props.handleRemoveItem }
                handleToggleItem={ this.props.handleToggleItem }
              />
            </ul>
          ))}
        </div>
      </div>
    );
  }
}

export default ListCard;
