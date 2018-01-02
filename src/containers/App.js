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

  render () {
    return (
      <div className="container">
        <h1>Checklist App</h1>
        <AddItem 
          handleNewItem={ this.addItem }
        />
        <ListCard 
          title="Unchecked"
          header="These items still need to checked!"
        />
        <ListCard 
          title="Checked"
          header="You've checked the following items..."
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
