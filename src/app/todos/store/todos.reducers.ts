import { ToDo } from './../todo.model';
import * as todosActions from './todos.actions';
import * as fromApp from '../../app.reducers';
import { act } from '@ngrx/effects';

export interface FeatureState extends fromApp.AppState {
  todos : State
}

export interface State {
  todos : ToDo[]
}

const initialState ={
  todos :  [
    new ToDo("work1","work1", new Date("2021-06-29") , "19:39", "05:15"),
    new ToDo("work2","work2", new Date("2021-06-30") , "09:39", "05:15"),
    new ToDo("work3","work3", new Date("2021-06-20") , "13:39", "05:15"),

  ]
}

export function todoReducer(state = initialState, action : todosActions.ToDoActions){
  switch (action.type) {
    // case todosActions.GET_TODOS:
    //   return {
    //     ...state,
    //   }

    // case todosActions.SET_TODO :
    //   console.log(action.payload);

    //   return {
    //     ...state,
    //   }

    case todosActions.ADD_TODO :
      return {
          ...state,
          todos : [...state.todos , action.payload]
      }

    case todosActions.UPDATE_TODO :
      const newrec = [...state.todos];
      const olditem = state.todos[action.payload.index];
      const upitem = {...olditem , ...action.payload.updatedrecipe};
      newrec[action.payload.index] = upitem;
      return {
        ...state,
        todos : newrec
      }

    case todosActions.DELETE_TODO :
      const oldrec = [...state.todos];
      oldrec.splice(action.payload,1);
      return {
        ...state,
        todos : oldrec
      }

    default:
      return state;
  }



}
