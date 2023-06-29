import type { TodosService } from "../services/todos.service.js";

export class AddTodoComponent {

    element = document.createElement('div');
    input = document.createElement('input');
    button = document.createElement('button');
    constructor(private todosService: TodosService) {
        document.body.appendChild(this.element);
        this.element.appendChild(this.input);
        this.element.appendChild(this.button);

        this.button.innerHTML = 'Add';
        this.button.addEventListener('click', () => {
            this.addTodo();
        })

    }

    addTodo() {
        this.todosService.addTodo(this.input.value);
    }

}