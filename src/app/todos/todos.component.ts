import { ToDo } from './todo.model';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as todosActions from './store/todos.actions';
import * as fromtodos from './store/todos.reducers';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos : Observable<fromtodos.State>;

  constructor(private store : Store<fromtodos.FeatureState>) {}

  ngOnInit(): void {
    this.todos = this.store.select('todos');
  }

}
