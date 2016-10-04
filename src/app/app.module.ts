import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {TodoAppComponent} from './todo-app/todo-app.component';
import {HeaderComponent} from './header/header.component';
import {TodoDetailComponent} from './todo-detail/todo-detail.component';
import {routing} from "./app.routing";

@NgModule({
    declarations: [
        AppComponent,
        TodoAppComponent,
        HeaderComponent,
        TodoDetailComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
