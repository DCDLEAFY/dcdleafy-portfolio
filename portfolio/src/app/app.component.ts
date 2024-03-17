import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PortfolioNavbarComponent } from './core/components/portfolio-navbar/portfolio-navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    PortfolioNavbarComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
}
