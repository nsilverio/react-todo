import React, { Component } from 'react';
import PropTypes from 'prop-types';
export class AddTodo extends Component {
  starte = {
    title: ''
  };
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: '' });
  };
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type='text'
          name='title'
          placeholder='Add todo'
          style={{ flex: '10', padding: '5px' }}
          onChange={this.onChange}
        />
        <input
          type='submit'
          value='Submit'
          className='btn'
          style={{ flex: '1' }}
        />
      </form>
    );
  }
}

AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired
};
export default AddTodo;
