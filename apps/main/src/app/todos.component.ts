import { NgFor } from '@angular/common';
import { Component, OnInit, inject, signal } from '@angular/core';
import { TodoModel } from './todo.model';
import { TodosService } from './todo.service';

@Component({
  selector: 'df-todos',
  standalone: true,
  imports: [NgFor],
  template: `
    <h2>Todos</h2>
    <ul>
      <li *ngFor="let todo of todos()">
        <span [class.completed]="todo.completed">
          {{ todo.title }}
        </span>
        <!-- <button (click)="toggleTodoComplete(todo)">
      {{todo.completed ? 'Incomplete' : 'Complete'}}
    </button>
    <button (click)="removeTodo(todo)">
      Remove
    </button> -->
      </li>
    </ul>
  `,
  styles: [],
})
export default class TodosComponent implements OnInit {
  todos = signal<TodoModel[]>([]);
  #todosService = inject(TodosService);

  ngOnInit() {
    this.#todosService.getTodos().then((todos) => {
      console.log('todos', todos.length);
      this.todos.set(todos);
    });
  }
}
