import React from 'react';

import './Todo.scss';

const Todo = props => {
  return (
    <div onClick={() => props.toggle(props.data.id)} className={`todo ${props.data.completed ? 'complete' : 'incomplete'}`}>
      <h3>{props.data.name}</h3>
      <input onChange={() => null} className='check' checked={props.data.completed} type='checkbox' />
    </div>
  );
};

export default Todo;