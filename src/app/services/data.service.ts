import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable} from 'rxjs';
import { TodoClass } from '../model/todo-class';
import { TODOS } from '../model/todos-mock';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // todos: TodoClass[] = [];


  todos : BehaviorSubject<TodoClass[]> = new BehaviorSubject<TodoClass[]>([]);

  constructor(private apiServ: ApiService) {
    // apiServ.fetchData()
    // .then(resp => resp.json())
    // .then(res => this.todos = this.convertToTodoClass(res))
    // .catch(err => console.error(err));
    this.apiServ.getTodosFromDb().subscribe({
      next: result => this.todos.next(result),
      error: err => console.log(err)
    });
    // this.todos = TODOS
   }

  //  convertToTodoClass(dbObjectArray: any){
  //   const todoArray = [];
  //   for (const dbObject of dbObjectArray) {
  //     const newTodo = TodoClass.fromDbObj(dbObject);
  //     todoArray.push(newTodo);
  //   }
  //   return todoArray;
  //  }


   getActiveTodos(): Observable<TodoClass[]>{
    return this.todos.pipe(
      map(array => array.filter(todo => todo.doneDate === null))
    )
    // const tempTodos = [];
    // for (const todo of this.todos) {
    //   if (todo.doneDate === null) {
    //     tempTodos.push(todo);
    //   }
    // }
    // return tempTodos;
   }

   getDoneTodos():Observable<TodoClass[]>{
    // return this.todos.filter(todo => todo.doneDate !== null);
    return this.todos.pipe(
      map(array => array.filter(todo => todo.doneDate !== null))
    )
   }


   refreshTodos(){
    const newArray = [...this.todos.value];
    this.todos.next(newArray);
   }

   removeTodo(todo: TodoClass){
    const newArray = this.todos.value.filter(t => t !== todo);
    this.todos.next(newArray);
   }

   getTodoById(id: string): Observable<TodoClass | undefined>{
    return this.todos.pipe(
    map(array => array.find(t => t.id === id))
    )
    
   }


}
