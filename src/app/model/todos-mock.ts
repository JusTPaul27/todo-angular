import { TodoClass, TodoPriority } from "./todo-class";
import { TodoInterface } from "./todo-interface";

export const TODOS: TodoClass[] = [];

const todo1 = new TodoClass('mandare curriculum ad Andrea');
const todo2 = new TodoClass('chiamare dentista', [], new Date(), TodoPriority.HIGH);
const todo3 = new TodoClass('comprare pane');
const todo4 = new TodoClass('annaffiare piante', [], new Date(), TodoPriority.MEDIUM);
const todo5 = new TodoClass('comprare fumetti', [], new Date(), TodoPriority.VERYHIGH);
const todo6 = new TodoClass('impostare sveglia gara 6 finals nba', [], new Date(), TodoPriority.DONE);
const todo7 = new TodoClass('sistemare radio', [], new Date("2001-07-02T00:00:00.000Z"), TodoPriority.LOW);


TODOS.push(todo1);
TODOS.push(todo2);
TODOS.push(todo3);
TODOS.push(todo4, todo5, todo6, todo7);

export const TODOS_I: TodoInterface[] = [
    {
      "creationDate": 1653288733,
      "name": "Inviare curriculm più bello",
      "tags": [
        "lavoro"
      ],
      "priority": 0,
      "id": "3"
    },
    {
      "creationDate": 1653560286.702,
      "name": "pagare la bolletta",
      "tags": [
        "famiglia"
      ],
      "priority": 2,
      "id": "4"
    },
    {
      "creationDate": 1653628329.369,
      "name": "aggiungere funzionalità all'app",
      "tags": [
        "lavoro"
      ],
      "priority": 1,
      "id": "5"
    },
    {
      "creationDate": 1653635600.344,
      "name": "comprare il latte",
      "tags": [
        "casa",
        "spesa"
      ],
      "priority": 0,
      "id": "6"
    }
  ]

