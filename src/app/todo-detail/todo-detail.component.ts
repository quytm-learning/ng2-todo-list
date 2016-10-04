import {Component, OnInit} from '@angular/core';
import {Todo} from "../todo";
import {TodoService} from "../todo.service";
import {ActivatedRoute, Router, Params} from "@angular/router";

@Component({
    selector: 'app-todo-detail',
    templateUrl: './todo-detail.component.html',
    styleUrls: ['./todo-detail.component.css'],
    providers: [TodoService]
})


export class TodoDetailComponent implements OnInit {
    private todo: Todo;
    constructor(private route: ActivatedRoute,
                private router: Router,
                private service: TodoService) {
    }

    ngOnInit() {
        // this.route.params.forEach((params: Params) => {
        //         let id = +params['id'];
        //         this.todo = this.service.getTodoById(id);
        //     }
        // )

        let id = +this.route.snapshot.params['id'];
        this.todo = this.service.getTodoById(id);
    }


}
