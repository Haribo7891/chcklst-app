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
              onChange=""></input>
            <button className="btn btn-primary my-2 my-sm-0" type="submit" onClick="">Add</button>
          </form>
        </div>
        <div className="card border-success mb-3">
          <div className="card-header">
            <div className="header">Checklist Items ( count of Items )</div>
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
        <div className="card border-success mb-3">
          <div className="card-header">
            <div className="header">Checklist Items ( count of Items )</div>
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
      </div>
    );
  }
}

export default App;
