import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-portfolio-container',
  standalone: true,
  imports: [
    RouterModule,
    RouterLink
  ],
  templateUrl: './portfolio-nav-container.component.html',
  styleUrl: './portfolio-nav-container.component.scss'
})
export class PortfolioNavContainerComponent {
  
}
