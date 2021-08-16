import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import * as todoActions from '../store/todos.actions';
import * as fromtodos from '../store/todos.reducers';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-addtodo',
  templateUrl: './addtodo.component.html',
  styleUrls: ['./addtodo.component.css']
})
export class AddtodoComponent implements OnInit {

  constructor(private store : Store<fromtodos.FeatureState>) { }

  ngOnInit(): void {
  }

  OnSubmit(form : NgForm){
    console.log(form.value);
    this.store.dispatch(new todoActions.SetToDo(form.value));
  }

}
