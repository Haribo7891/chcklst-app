import React, { Component } from 'react';
import '../styles/App.css';
import { AddItem } from '../components';

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
        <div className="buttons justify-content-between align-items-center">
          <span className="">
            <button type="button" className="btn btn-primary btn-lg" onClick="">Uncheck all items</button>
          </span>
          <span className="">
            <button type="button" className="btn btn-danger btn-lg" onClick="">Delete all items</button>
          </span>
        </div>
      </div>
    );
  }
}

export default App;
