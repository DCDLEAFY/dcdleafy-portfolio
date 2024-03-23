import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-portfolio-nav',
  standalone: true,
  imports: [
    RouterModule,
    RouterLink
  ],
  templateUrl: './portfolio-nav.component.html',
  styleUrl: './portfolio-nav.component.scss'
})
export class PortfolioNavComponent {
  
}
