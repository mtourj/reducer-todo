import React, { useReducer } from 'react';
import './App.scss';

import AddTodo from './components/AddTodo';
import Todo from './components/Todo';

import * as actions from './actions';

import { reducer, initialState } from './reducers';

function App() {
  const [{todos}, todoDispatch] = useReducer(reducer, initialState);

  const addTodo = name => {
    todoDispatch({ type: actions.ADD_TODO, payload: name });
  }

  const toggleTodo = id => {
    todoDispatch({ type: actions.TOGGLE_TODO, payload: id });
  }

  const clearCompleted = () => {
    todoDispatch({ type: actions.CLEAR_COMPLETED });
  }

  return (
    <div className="App">
      <AddTodo add={addTodo} />
      <div className='todo-list'>
        { todos.length > 0 ?
          todos.map(todo => <Todo key={todo.id} toggle={toggleTodo} data={todo} />)
          : <div className='empty'>Todos will show up here when added</div>
        }
      </div>
      <button onClick={clearCompleted}>CLEAR COMPLETED</button>
    </div>
  );
}

export default App;
