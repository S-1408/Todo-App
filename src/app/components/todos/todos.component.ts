import { Todo } from './../../model/todo';
import { TodoService } from './../../services/todo.service';
import { Component, OnInit } from '@angular/core';
import {faTrashAlt} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[] = [];
  faTrashAlt = faTrashAlt;
  constructor( private todoService: TodoService) { }

  ngOnInit(): void {
    this.getTodoStatus();
  }

  // tslint:disable-next-line:typedef
  getTodoStatus(){
     this.todoService.getTodos().subscribe( tododata => {
       this.todos = tododata;
});
  }

  // tslint:disable-next-line:typedef
  changeTodoStatus(todo: Todo){
    this.todoService.changeStatus(todo);
  }

  // tslint:disable-next-line:typedef
  deleteTodo(todo: Todo){
    this.todoService.deleteTodos(todo);
  }
}
