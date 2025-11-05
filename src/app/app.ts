import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
// import { Hero } from './components/hero/hero';
// Reimplement hero to homepage instead 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Navbar],
  templateUrl: './app.html'
})
export class App {
  protected readonly title = signal('global-prayer-dashboard');
}
