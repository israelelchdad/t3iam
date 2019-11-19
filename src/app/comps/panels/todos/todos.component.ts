import { Component, OnInit } from '@angular/core';
import { Todo } from '../../../model/todo';
import { TodoService } from '../../../servicess/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  index:number =0;
  currentTodo:Todo;
  spanClassValue:string= 'stat'
  divClassValue:string = ''
  todoi:Todo[];


  constructor(public todoSvc:TodoService ) {
    
    
   }

  ngOnInit() {
    this.next()
    this.todoSvc.getTodos().subscribe(data=> this.todoi=data)
  }
  next(){
     this.spanClassValue= 'stat w8'
     this.divClassValue='shhh'
     this.todoSvc.get(++this.index)
     .subscribe(todoItem=>{
      this.spanClassValue= 'stat'
      this.divClassValue = ''
      this.currentTodo=todoItem
    
    } )

  }

}
