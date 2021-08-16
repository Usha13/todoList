import { ToDo } from './../todo.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-todoitem',
  templateUrl: './todoitem.component.html',
  styleUrls: ['./todoitem.component.css']
})
export class TodoitemComponent implements OnInit {
  @Input('todo') todo : ToDo;
  @Input('index') index : number;

  constructor() { }

  ngOnInit(): void {
  }

}
