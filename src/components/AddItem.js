import React, { Component } from 'react';

class AddItem extends Component {
  
  state = {
    inputValue: ''
  }

  handleInputChange = (event) => {
    event.preventDefault();
    this.setState({
      inputValue: event.target.value
    })
  }

  render () {
    return (
      <div className="form-group">
        <label className="col-form-label col-form-label-lg" htmlFor="inputLarge">Add an item to your checklist:</label>
          <form className="form-inline my-2 my-lg-0">
            <input 
              className="form-control mr-sm-2" 
              type="text" 
              placeholder="Add item..." 
              ref="addNewItem" 
              onChange={ this.handleInputChange }></input>
            <button className="btn btn-primary my-2 my-sm-0" type="submit" onClick="">Add</button>
          </form>
      </div>
    );
  }
}

export default AddItem;
