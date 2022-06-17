import { AfterViewInit, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { TodoClass } from 'src/app/model/todo-class';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit,  AfterViewInit, OnDestroy {
  @Input() todos: TodoClass[];

  constructor() { 
    this.todos = [];
  }

  ngOnInit(): void {

    
  }

  ngAfterViewInit(): void {

  }

  ngOnDestroy():void{

  }
  
  manageTodoEmission(todo: TodoClass){
    console.log('list component', todo.name);
    this.orderByPriority();
    
  }


  





  orderByName(){
    // this.todos.sort((a,b)=>{
    //  return a.name.localeCompare(b.name);
    // })
    this.todos.sort(TodoClass.compareTodoByName);
  }

  orderByDate(){
    this.todos.sort(TodoClass.compareTodoByDate);
  }

  orderByPriority(){
    this.todos.sort(TodoClass.compareTodoByPriority);
  }

}
