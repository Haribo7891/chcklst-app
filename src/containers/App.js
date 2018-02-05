import React, { Component } from 'react';
import _ from 'lodash';
import '../styles/App.css';
import { AddItem, UncheckItems, DeleteAll, Footer, CheckAll } from '../components';
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
      }, ...this.state.items ]
    });
  }

  uncheckItems = () => {
    const { items } = this.state;
    this.setState({
      items: items.map(({ id, name }) => {
        return {
          id: id,
          name: name,
          checked: false
        };
      })
    });
  }
  
  checkAllItems = () => {
    const { items } = this.state;
    this.setState({
      items: items.map(({ id, name }) => {
        return {
          id: id,
          name: name,
          checked: true
        };
      })
    });
  }
  
  deleteAllItems = () => {
    this.setState({
      items: []
    });
  }
  
  removeItem = (id) => {
    const { items } = this.state;
    this.setState({
      items: items.filter((item) => item.id !== id)
    });
  }
  
  toggleItem = (id) => {
    const { items } = this.state;
    this.setState({
      items: items.map((item) => {
        if (item.id === id) {
          return {
            id: item.id,
            name: item.name,
            checked: !item.checked
          };
        }
        return item;
      })
    });
  }

  render () {
    const { items } = this.state;
    const checked = items.filter((item) => item.checked);
    const unchecked = items.filter((item) => !item.checked);
    return (
      <div className="container">
        <div className="App">
          <h1>Checklist App</h1>
        </div>
        <AddItem 
          handleNewItem={ this.addItem }
        />
        { items.length >= 1 ?
          <div>
            <ListCard 
              items={ unchecked }
              title="Unchecked"
              header="The following items still need to be checked..."
              handleRemoveItem={ this.removeItem }
              handleToggleItem={ this.toggleItem }
            />
            <ListCard 
              items={ checked }
              title="Checked"
              header="The following items have been checked..."
              handleRemoveItem={ this.removeItem }
              handleToggleItem={ this.toggleItem }
            />
            <div className="buttons justify-content-between align-items-center App">
              <CheckAll 
                handleCheckAll={ this.checkAllItems }
              />
              <UncheckItems 
                handleUncheckItems={ this.uncheckItems }
              />
              <DeleteAll 
                handleDeleteAll={ this.deleteAllItems }
              />
            </div>
          </div> : '' }
        <div className="App">
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
