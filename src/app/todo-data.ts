import {Todo} from "./todo";
/**
 * Created by tmq on 04/10/2016.
 */


export class TodoManager {
    private static instance: TodoManager = null;
    private arrTodoes: Todo[] = [];
    public static getInstance(): TodoManager {
        if (this.instance == null){
            this.instance = new TodoManager();
        }
        return this.instance;
    }

    getTodoes(): Todo[]{
        return this.arrTodoes;
    }
}