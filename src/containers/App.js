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
        packed: false
      }, ...this.state.items]
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
          <UncheckItems />
          <DeleteAll />
        </div>
      </div>
    );
  }
}

export default App;
