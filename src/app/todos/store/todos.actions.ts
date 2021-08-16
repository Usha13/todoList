import { ToDo } from './../todo.model';
import { Action } from "@ngrx/store";

export const GET_TODOS = 'GET_TODOS';
export const SET_TODO = 'SET_TODO';
export const ADD_TODO = 'ADD_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const FETCH_TODO = 'FETCH_TODO';
export const STORE_TODO = 'STORE_TODO';

export class GetTodos implements Action{
  readonly type = GET_TODOS;
}

export class SetToDo implements Action{
  readonly type = SET_TODO;
  constructor(public payload : ToDo){}
}

export class AddTodo implements Action{
  readonly type = ADD_TODO;
  constructor(public payload : ToDo){}
}
export class UpdateTodo implements Action{
  readonly type = UPDATE_TODO;
  constructor(public payload : {index: number , updatedrecipe: ToDo}){}
}
export class DeleteTodo implements Action{
  readonly type = DELETE_TODO;
  constructor(public payload : number){}
}
export class FetchTodo implements Action{
  readonly type = FETCH_TODO;
}
export class StoreTodo implements Action{
  readonly type = STORE_TODO;
}

export type ToDoActions = SetToDo | AddTodo | UpdateTodo | DeleteTodo | FetchTodo | StoreTodo | GetTodos;
