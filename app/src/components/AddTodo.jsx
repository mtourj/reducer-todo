import React, { useState } from 'react';

import './AddTodo.scss';

const AddTodo = props => {
  const [state, setState] = useState({
    name: '',
    error: ''
  });

  const handleChange = event => {
    // Validate our input before letting it in

    setState({
      ...state,
      [event.target.name]: event.target.value,
      error: ''
    })
  }

  const setError = error => {
    setState({
      ...state,
      error
    })
  }

  const handleSubmit = e => {
    e.preventDefault();

    // Validate input before 
    if(!state.name.trim())
      setError('Invalid: empty string');
    else props.add(state.name.trim());
  }

  return (
    <div className='container'>
    <form onSubmit={handleSubmit} className='add-todo'>
      <label>
        Add a new task
        <input className='new-todo' name='name' value={state.name} onChange={handleChange} />
      </label>
      <button className='add-btn' type='submit'>ADD</button>
    </form>
    {
      state.error && <div className='error'>{state.error}</div>
    }
    </div>
  );
};

export default AddTodo;