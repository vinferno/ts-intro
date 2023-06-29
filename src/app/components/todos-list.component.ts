import type { Todo } from "app/models/todo";
import type { TodosService } from "../services/todos.service.js";

export class TodosListComponent {
    public element = document.createElement("ul");
    public titleElement = document.createElement('h1');
    constructor(private todosService: TodosService){
        document.body.appendChild(this.titleElement);
        this.titleElement.innerHTML = 'Titles'; 
        document.body.appendChild(this.element);




 

    }



    render() {
        this.element.innerHTML = '';
        this.todosService.todos.forEach( todo => {
            const li = document.createElement('li');
            li.innerHTML = todo.task;
            this.element.appendChild(li);
        });
    }



}