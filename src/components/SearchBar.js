import React, { Component } from 'react';

export default class SearchBar extends Component {
  state = { term: '' };

  OnInputChange = (event) => {
    this.setState({ term: event.target.value });
  };
  onSubmitForm = (event) => {
    event.preventDefault();

    // make sure we call
    // callback from parent component
    this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
      <div className='search-bar ui segment'>
        <form onSubmit={this.onSubmitForm} className='ui form'>
          <div className='field'>
            <label>Video Search</label>
            <input
              type='text'
              value={this.state.term}
              onChange={this.OnInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}
