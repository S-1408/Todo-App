import { TodoService } from './../../services/todo.service';
import { Component, OnInit } from '@angular/core';
import {Todo} from './../../model/todo';
import {v4 as uuidv4} from 'uuid';
@Component({
  selector: 'app-todoform',
  templateUrl: './todoform.component.html',
  styleUrls: ['./todoform.component.css']
})
export class TodoformComponent implements OnInit {

  todoTitle!: string;


  constructor(private todoservice: TodoService) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  handleAdd(){
    const newTodo: Todo = {
      id: uuidv4(),
      title: this. todoTitle,
      date: new Date(),
      isCompleted: false
    };
    this.todoservice.AddTodo(newTodo);
    this.todoTitle = '';
  }

}
