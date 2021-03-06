import { Component, OnInit } from '@angular/core';
import { TodoClass } from 'src/app/model/todo-class';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-done-list',
  templateUrl: './done-list.component.html',
  styleUrls: ['./done-list.component.scss']
})
export class DoneListComponent implements OnInit {

  todosArray: TodoClass[] = [];

  

  constructor(private dataServ: DataService) { 
    dataServ.getDoneTodos().subscribe({
      next: todos => this.todosArray = todos,
      error: err => console.log(err)
    });
  }

  ngOnInit(): void {
  }

  refreshArray(){
    // this.todosArray = this.dataServ.getDoneTodos();
  }
  
  manageTodoDelete(todo: TodoClass) {
    this.dataServ.removeTodo(todo).subscribe({
      next: res => console.log(res),
      error: err => console.log(err)     
    })
  }

  orderByName(){
    this.todosArray.sort(TodoClass.compareTodoByName);
  }

  orderByDate(){
    this.todosArray.sort(TodoClass.compareTodoByDate);
  }

  orderByPriority(){
    this.todosArray.sort(TodoClass.compareTodoByPriority);
  }

}


