import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { TodosComponent } from './components/todos/todos.component';
import { TodoformComponent } from './components/todoform/todoform.component';
import { HeaderComponent } from './template/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoformComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
