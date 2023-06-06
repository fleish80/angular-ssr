import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  selector: 'df-root',
  template: ` <nav class="nav">
      <a routerLink="/home">Home</a>
      <a routerLink="/about">About</a>
      <a routerLink="/todos">Todo</a>
    </nav>

    <router-outlet />`,
  styles: [
    `
      .nav {
        display: flex;
        gap: 10px;
        padding-block-end: 10px;
      }
    `,
  ],
})
export class AppComponent {
  title = 'main';
}
