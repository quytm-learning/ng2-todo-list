import {Component, OnInit} from '@angular/core';
import {Todo} from "../todo";

@Component({
    selector: 'app-todo-detail',
    templateUrl: './todo-detail.component.html',
    styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent implements OnInit {
    todo: Todo;

    constructor() {
    }

    ngOnInit() {
        this.todo = new Todo();
        this.todo.title = "This is a title";
    }

}
