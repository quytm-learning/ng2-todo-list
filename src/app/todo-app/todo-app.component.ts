import {Component, OnInit} from '@angular/core';
import {TodoService} from "../todo.service";
import {Todo} from "../todo";
import {Router} from "@angular/router";

@Component({
    selector: 'app-todo-app',
    templateUrl: './todo-app.component.html',
    styleUrls: ['./todo-app.component.css'],
    providers: [TodoService]
})
export class TodoAppComponent implements OnInit {
    newTodo: Todo = new Todo();

    constructor(private router: Router,
                private todoService: TodoService) {
    }

    ngOnInit() {
    }

    gotoDetail(todo: Todo): void {
        let link = ['/todo', todo.id];
        console.log('goto link = ' + link);
        // this.router.navigate(link);
        this.router.navigate(['/todo', todo.id]);

    }

    addTodo() {
        this.todoService.addTodo(this.newTodo);
        this.newTodo = new Todo();
    }

    toggleTodoComplete(todo) {
        this.todoService.toggleTodoComplete(todo);
    }

    removeTodo(todo) {
        this.todoService.deleteTodoById(todo.id);
    }

    get todos() {
        return this.todoService.getAllTodo();
    }

}
