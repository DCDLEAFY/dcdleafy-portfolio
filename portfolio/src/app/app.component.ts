import { Component } from '@angular/core';
import { PortfolioNavContainerComponent } from './core/components/portfolio-nav-container/portfolio-nav-container.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    PortfolioNavContainerComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
}
