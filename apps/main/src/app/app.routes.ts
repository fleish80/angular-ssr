import { ResolveFn, Route } from '@angular/router';
import { map, timer } from 'rxjs';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    loadComponent: () => import('./home.component'),
  },
  {
    path: 'about',
    loadComponent: () => import('./about.component'),
    resolve: {resolver: () => timer(3000).pipe(map(() => true))},
  },
  {
    path: 'todos',
    loadComponent: () => import('./todos.component'),
  },
];
