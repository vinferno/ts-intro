
import  { Todo } from "../models/todo.js";



export class TodosService {
    private _todos: Todo[] = [];


    get todos() {
        return this._todos.map(todo => ({...todo}))
    }

    addTodo(task: string, id?: number) {
        const todo = new Todo(task, id);
        this._todos.push(todo);
        console.log(this.todos);
    }

}