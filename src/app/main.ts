import { AddTodoComponent } from "./components/add-todo.component.js";
import { TodosListComponent } from "./components/todos-list.component.js";
import { TodosService } from "./services/todos.service.js";

const todosService = new TodosService();
new TodosListComponent(todosService);
new AddTodoComponent(todosService);
console.log('test12')