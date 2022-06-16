import { TodoPriority } from "./todo-class";

export interface TodoInterface {
    id?: string;
    name:string;
    tags: string[];
    priority: TodoPriority;
    creationDate: number;
}

export function fromPrioritytoColor(priority: TodoPriority): string{
    switch (priority) {
        case TodoPriority.DONE:
            return 'aquamarine';
        case TodoPriority.LOW:
            return 'green';
        case TodoPriority.MEDIUM:
            return 'yellow';
        case TodoPriority.HIGH:
                return 'orange';                   
        default:
            return 'red';
    }
}


export function fromPrioritytoDescr(priority: TodoPriority): string{
    switch (priority) {
        case TodoPriority.DONE:
            return 'completato';
        case TodoPriority.LOW:
            return 'bassa';
        case TodoPriority.MEDIUM:
            return 'media';
        case TodoPriority.HIGH:
            return 'media';                
        default:
            return 'molto alta';
    }
}

