import { TodosComponent } from './components/todos/todos.component';
import { TodoformComponent } from './components/todoform/todoform.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // {path: 'todoform', component: TodoformComponent},
  // {path: 'todos' , component: TodosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
