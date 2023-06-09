import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todoform',
  templateUrl: './todoform.component.html',
  styleUrls: ['./todoform.component.css']
})
export class TodoformComponent implements OnInit {
  taskInput=""
constructor(private ts:TodoService){}
ngOnInit(): void {
    
}
addTask(){
this.ts.addTodo(this.taskInput);
this.taskInput=""
}
resetForm(){
  this.taskInput=""

}
}
