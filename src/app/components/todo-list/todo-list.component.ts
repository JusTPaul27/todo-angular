import { AfterViewInit, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { TodoClass } from 'src/app/model/todo-class';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit,  AfterViewInit, OnDestroy {
  // @Input() todos: TodoClass[];
  todosArray: TodoClass[] = [];

  

  constructor(private dataServ: DataService) { 
    dataServ.getActiveTodos().subscribe({
      next: todos => this.todosArray = todos,
      error: err => console.log(err)
    });
  }


  refreshArray(){
  //   this.todosArray = this.dataServ.getActiveTodos();
  }

  ngOnInit(): void {

    
  }

  ngAfterViewInit(): void {

  }

  ngOnDestroy():void{

  }
  
  manageTodoEmission(todo: TodoClass){
    this.dataServ.completeTodo(todo).subscribe({
      next: todo => console.log('Yohohoho! ', todo),
      error: err => console.log(err)      
    })
  }


  





  orderByName(){
    // this.todos.sort((a,b)=>{
    //  return a.name.localeCompare(b.name);
    // })
    this.todosArray.sort(TodoClass.compareTodoByName);
  }

  orderByDate(){
    this.todosArray.sort(TodoClass.compareTodoByDate);
  }

  orderByPriority(){
    this.todosArray.sort(TodoClass.compareTodoByPriority);
  }

}
