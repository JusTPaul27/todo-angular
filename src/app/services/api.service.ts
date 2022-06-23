import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TodoClass } from '../model/todo-class';
import { HttpClientModule } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private readonly BASE_URL = 'https://628b2f157886bbbb37b20caa.mockapi.io/todos';

  constructor(private http: HttpClient) {
   }

   getTodosFromDb(){
      return this.http.get<TodoClass[]>(this.BASE_URL).pipe(
      map(dbObjects => this.convertToTodoClass(dbObjects))
    );
   }


   deleteTodo(id: string): Observable<any>{
    const url = this.BASE_URL + '/' + id;
    return this.http.delete<any>(url);
   }

   putTodo(todo: TodoClass): Observable<TodoClass>{
    const url = this.BASE_URL + '/' + todo.id;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: 'my-auth-token'
      })
    }

    return this.http.put<TodoClass>(url, TodoClass.toDbObj(todo), httpOptions)
   }

   postTodo(todo: TodoClass): Observable<TodoClass>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: 'my-auth-token'
      })
    }

    return this.http.post<TodoClass>(this.BASE_URL, TodoClass.toDbObj(todo), httpOptions).pipe(
    map(todosObj => TodoClass.fromDbObj(todosObj))
    )
   }

   convertToTodoClass(dbObjectArray: any){
    const todoArray = [];
    for (const dbObject of dbObjectArray) {
      const newTodo = TodoClass.fromDbObj(dbObject);
      todoArray.push(newTodo);
    }
    return todoArray;
   }

  //  fetchData(){
  //   return fetch('https://628b2f157886bbbb37b20caa.mockapi.io/todos')
  //  }
}
