import { Component, OnInit } from '@angular/core';
import { TodoClass, TodoPriority } from './model/todo-class';
import { fromPrioritytoColor, fromPrioritytoDescr, TodoInterface } from './model/todo-interface';
import { TODOS, TODOS_I } from './model/todos-mock';
import { TodoListComponent } from './components/todo-list/todo-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  title = 'todo-angular';
  // todosArray: TodoClass[];

  constructor(){
    // this.todosArray = TODOS;
  }


  ngOnInit(): void {
    
  }

  getCorrectDate(timeStamp: number) :Date{
    const milliseconds = timeStamp*1000;
    return new Date(milliseconds);
  }

  getDescription(priority: TodoPriority){
    return fromPrioritytoDescr(priority);
  }

  getColor(priority: TodoPriority){
    return fromPrioritytoColor(priority);
  }

}
