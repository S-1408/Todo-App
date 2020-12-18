import { Injectable } from '@angular/core';
import {of} from 'rxjs';
import {Todo} from './../model/todo';
@Injectable({
  providedIn: 'root'
})
export class TodoService {
todos: Todo[];
  constructor() { 
    this.todos = [
      { 
        id : '1',
        title : 'Learn HTML',
        isCompleted : true,
        date : new Date(),
      },
      { 
        id : '1',
        title : 'Learn Reactjs',
        isCompleted : true,
        date : new Date(),
      },
      { 
        id : '1',
        title : 'Learn Angular',
        isCompleted : true,
        date : new Date(),
      },
      { 
        id : '4',
        title : 'Learn CSS',
        isCompleted : true,
        date : new Date(),
      },
    ];
    
  }


  // tslint:disable-next-line:typedef
  getTodos(){
    return of(this.todos);
  }

  // tslint:disable-next-line:typedef
  AddTodo(todo: Todo){
    this.todos.push(todo);
  }

  // tslint:disable-next-line:typedef
  changeStatus(todo: Todo){
this.todos.map(singleTodo => {
  if(singleTodo.id == todo.id){
 todo.isCompleted = !todo.isCompleted;
  }

 
});
  }
  // tslint:disable-next-line:typedef
  deleteTodos(todo: Todo){
    const indexofTodo = this.todos.findIndex(
      (currentObj) => currentObj.id === todo.id,
    );
    this.todos.splice(indexofTodo, 1);
     }
}
