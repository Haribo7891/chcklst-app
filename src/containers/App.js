import React, { Component } from 'react';
import '../styles/App.css';
import { AddItem, UncheckItems } from '../components';
import { ListCard } from '../containers';

class App extends Component {

  state = {
    items: []
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
          <span className="">
            <button type="button" className="btn btn-danger btn-lg" onClick="">Delete all items</button>
          </span>
        </div>
      </div>
    );
  }
}

export default App;
