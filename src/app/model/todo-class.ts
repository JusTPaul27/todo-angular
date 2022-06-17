export class TodoClass {

    name: string;
    tags: string[];
    private readonly _creationDate: number;
    priority: TodoPriority;
    private _doneDate?: number;

    constructor(name: string, tags: string[]=[], creationDate: Date = new Date(), priority: TodoPriority = TodoPriority.LOW){

        this.name = name;
        this.tags = tags;
        this._creationDate = creationDate.getTime();
        this.priority = priority;
        
    }

    get creationDate(): Date{
        return new Date(this._creationDate);
    }

    get doneDate(): Date | null{
        if (this._doneDate) {
            return new Date (this._doneDate)
        } else{
            return null;
        }
    }

    get color():string {
        return getPriorityColor(this.priority);
    }

    get description():string {
        return getPriorityString(this.priority);
    }

    done(): void{
        const now = new Date();
        this.priority = TodoPriority.DONE;
        this._doneDate = now.getTime();
    }

    static compareTodoByName(a: TodoClass, b: TodoClass){
        return a.name.localeCompare(b.name);
    }

    static compareTodoByDate(a:TodoClass, b:TodoClass){
        return a._creationDate - b._creationDate;
    }

    static compareTodoByPriority(a:TodoClass, b:TodoClass){
        return b.priority - a.priority;
    }

}

// export enum TodoPriority {
//     DONE = { order: -1, name: 'Fatto', color: 'aquamarine' },
//     LOW = { order: 0, name: 'Bassa', color: 'green' },
//     MEDIUM = { order: 1, name: 'Media', color: '#FAC748' },
//     HIGH = { order: 2, name: 'Alta', color: 'darkorange' },
//     VERYHIGH = { order: 3, name: 'Molto alta', color: 'red' }
// }

export enum TodoPriority {
    DONE = -1,
    LOW = 0,
    MEDIUM = 1,
    HIGH = 2,
    VERYHIGH = 3
}

export function getPriorityColor(priority: TodoPriority): string{
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
            return 'tomato';
    }
}


export function getPriorityString(priority: TodoPriority): string{
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


