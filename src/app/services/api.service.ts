import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TodoClass } from '../model/todo-class';
import { HttpClientModule } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
   }

   getTodosFromDb(){
    const url = 'https://628b2f157886bbbb37b20caa.mockapi.io/todos';
    return this.http.get<TodoClass[]>(url).pipe(
      map(dbObjects => this.convertToTodoClass(dbObjects))
    );
   }

   convertToTodoClass(dbObjectArray: any){
    const todoArray = [];
    for (const dbObject of dbObjectArray) {
      const newTodo = TodoClass.fromDbObj(dbObject);
      todoArray.push(newTodo);
    }
    return todoArray;
   }

   fetchData(){
    return fetch('https://628b2f157886bbbb37b20caa.mockapi.io/todos')
   }
}
