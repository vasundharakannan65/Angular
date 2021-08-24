import { Component, Input, OnInit,Output,EventEmitter } from '@angular/core';
import { Todo } from './../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {


  @Output() myOutput:EventEmitter<string>= new EventEmitter<string>();

  opmsg:string = "vasi";

  sendValues(){
    this.myOutput.emit(this.opmsg);
 }

  title:string = "To-Do List";

  todos: Todo[] = [];

  inputTodo:string = "";

  constructor() { }

  ngOnInit(): void {
    this.todos = []
  }

  toggleDone(id: number)
  {
  this.todos.map((v,i) => {
      if( i == id ) v.completed = !v.completed;
        return v;
  })

  }


  deleteTodo(id:number)
  {
    this.todos = this.todos.filter((v,i) => i !== id);
  }

  addTodo()
  {
    this.todos.push({
      content : this.inputTodo,
      completed : false
    });

    this.inputTodo = "";


    localStorage.setItem('myTodo', JSON.stringify(this.todos));
  }


}
