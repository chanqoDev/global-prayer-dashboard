import { Routes } from '@angular/router';
import { DashboardComponent } from './features/dashboard/dashboard';
import { About } from './features/about/about';
import { NotFound } from './features/not-found/not-found';
import { Home } from './features/home/home';

export const routes: Routes = [
  { path: '', component: Home, pathMatch: 'full' },
  { path: 'about', component: About }, 
  { path: 'dashboard', component: DashboardComponent },
  { path: '**', component: NotFound }
];
