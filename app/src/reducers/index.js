import * as actions from '../actions';

import uniqid from 'uniqid';

export const initialState = {
  todos: [
    {
      name: 'Finish this project',
      completed: false
    }
  ]
}

export const reducer = (state, action) => {
  switch(action.type){
    case actions.ADD_TODO: {
      return {
        ...state,
        todos: [
          state.todos,
          {
            name: action.payload,
            completed: false,
            id: uniqid()
          }
        ]
      }
    }
    case actions.TOGGLE_TODO: {
      const newTodos = state.todos.map(todo => {
        if(todo.id === action.payload){
          return {
            ...todo,
            completed: !todo.completed
          }
        } else return todo
      })

      return {
        ...state,
        todos: newTodos
      }
    }
    case actions.CLEAR_COMPLETED: {
      const newTodos = state.todos.filter(todo => !todo.completed)

      return {
        ...state,
        todos: newTodos
      }
    }
    default : {
      return state;
    }
  }
}