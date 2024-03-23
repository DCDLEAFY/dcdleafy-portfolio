import { Component } from '@angular/core';
import { PortfolioNavContainerComponent } from './core/components/portfolio-nav-container/portfolio-nav-container.component';
import { aboutSkillsSection } from '../assets/data/data';
import { CommonModule } from '@angular/common';
import { PortfolioSkillBadgeContainerComponent } from './core/components/portfolio-skill-badge-container/portfolio-skill-badge-container.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    PortfolioNavContainerComponent,
    PortfolioSkillBadgeContainerComponent,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  aboutSkillsSection: string[] = aboutSkillsSection;
}
