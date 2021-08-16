import * as fromAuth from './auth/store/auth.reducers';
import * as fromtodos from './todos/store/todos.reducers';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
  auth : fromAuth.State,
  todos : fromtodos.State
}

export const reducers : ActionReducerMap<AppState>= {
    'auth' : fromAuth.AuthReducer,
    'todos' : fromtodos.todoReducer
}
