import { Component } from '@angular/core';
import { PortfolioNavComponent } from './core/components/portfolio-nav/portfolio-nav.component';
import { aboutSkillsSection } from '../assets/data/data';
import { CommonModule } from '@angular/common';
import { PortfolioSkillBadgesComponent } from './core/components/portfolio-skill-badges/portfolio-skill-badges.component';
import { IntroContentComponent } from './core/components/content/intro-content/intro-content.component';
import { WorkExperienceContentComponent } from './core/components/content/work-experience-content/work-experience-content.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    PortfolioNavComponent,
    PortfolioSkillBadgesComponent,
    IntroContentComponent,
    WorkExperienceContentComponent,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  aboutSkillList: string[] = aboutSkillsSection;
}
