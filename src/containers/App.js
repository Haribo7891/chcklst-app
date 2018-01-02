import React, { Component } from 'react';
import '../styles/App.css';

class App extends Component {
  render () {
    return (
      <div className="container">
        <h1>Checklist App</h1>
        <div className="form-group">
          <label className="col-form-label col-form-label-lg" htmlFor="inputLarge">Add an item to your checklist:</label>
          <form className="form-inline my-2 my-lg-0">
            <input 
              className="form-control mr-sm-2" 
              type="text" 
              placeholder="Add item..." 
              ref="addNewItem" 
            ></input>
            <button className="btn btn-primary my-2 my-sm-0" type="submit" >Add</button>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
