import {Routes, RouterModule} from "@angular/router";
import {TodoDetailComponent} from "./todo-detail/todo-detail.component";
import {ModuleWithProviders} from "@angular/core";
import {TodoAppComponent} from "./todo-app/todo-app.component";
/**
 * Created by tmq on 27/09/2016.
 */

const appRoutes: Routes = [
    {
        path: '',
        component: TodoAppComponent
    },
    {
        path: 'todo',
        component: TodoDetailComponent
    },
    {
        path: 'todo/:id',
        component: TodoDetailComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);