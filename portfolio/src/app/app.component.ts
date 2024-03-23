import { Component } from '@angular/core';
import { PortfolioNavComponent } from './core/components/portfolio-nav/portfolio-nav.component';
import { aboutSkillsSection } from '../assets/data/data';
import { CommonModule } from '@angular/common';
import { PortfolioSkillBadgesComponent } from './core/components/portfolio-skill-badges/portfolio-skill-badges.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    PortfolioNavComponent,
    PortfolioSkillBadgesComponent,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  aboutSkillList: string[] = aboutSkillsSection;
}
