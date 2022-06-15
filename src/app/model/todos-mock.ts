import { TodoClass, TodoPriority } from "./todo-class";

export const TODOS: TodoClass[] = [];

const todo1 = new TodoClass('mandare curriculum ad Andrea');
const todo2 = new TodoClass('chiamare dentista', [], new Date(), TodoPriority.HIGH);
const todo3 = new TodoClass('comprare pane');
const todo4 = new TodoClass('mannaffiare piante', [], new Date(), TodoPriority.MEDIUM);


TODOS.push(todo1);
TODOS.push(todo2);
TODOS.push(todo3);
TODOS.push(todo4);