import React, { Component } from 'react';
import _ from 'lodash';
import '../styles/App.css';
import { AddItem, UncheckItems, DeleteAll } from '../components';
import { ListCard } from '../containers';

class App extends Component {

  state = {
    items: []
  }

  addItem = (name) => {
    this.setState({
      items: [{
        id: _.uniqueId(),
        name: name,
        checked: false
      }, ...this.state.items]
    })
  }

  uncheckItems = () => {
    this.setState({
      items: this.state.items.map(({ id, name }) => {
        return {
          id: id,
          name: name,
          checked: false
        }
      })
    })
  }

  deleteAllItems = () => {
    this.setState({
      items: []
    })
  }

  removeItem = (id) => {
    this.setState({
      items: this.state.items.filter((item) => item.id !== id)
    })
  }

  toggleItem = (id) => {
    this.setState({
      items: this.state.items.map((item) => {
        if (item.id === id) {
          return {
            id: item.id,
            name: item.name,
            checked: !item.checked
          }
        }
        return item;
      })
    })
  }

  render () {
    const checked = this.state.items.filter(item => item.checked);
    const unchecked = this.state.items.filter(item => !item.checked);
    return (
      <div className="container">
        <h1>Checklist App</h1>
        <AddItem 
          handleNewItem={ this.addItem }
        />
        <ListCard 
          items={ unchecked }
          title="Unchecked"
          header="These items still need to checked!"
          handleRemoveItem={ this.removeItem }
          handleToggleItem={ this.toggleItem }
        />
        <ListCard 
          items={ checked }
          title="Checked"
          header="You've checked the following items..."
          handleRemoveItem={ this.removeItem }
          handleToggleItem={ this.toggleItem }
        />
        <div className="buttons justify-content-between align-items-center">
          <UncheckItems 
            handleUncheckItems={ this.uncheckItems }
            />
          <DeleteAll 
            handleDeleteAll={ this.deleteAllItems }
          />
        </div>
      </div>
    );
  }
}

export default App;
