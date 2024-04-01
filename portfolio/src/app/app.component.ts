import { Component } from '@angular/core';
import { PortfolioNavComponent } from './core/components/portfolio-nav/portfolio-nav.component';
import { aboutSkillsSection, dataWorkExperience, dataProject } from '../assets/data/data';
import { CommonModule } from '@angular/common';
import { PortfolioSkillBadgesComponent } from './core/components/portfolio-skill-badges/portfolio-skill-badges.component';
import { IntroContentComponent } from './core/components/content/intro-content/intro-content.component';
import { TablistContentComponent } from './core/components/content/tablist-content/tablist-content.component';
import { PortfolioInformation } from './core/models/portfolio-information';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    PortfolioNavComponent,
    PortfolioSkillBadgesComponent,
    IntroContentComponent,
    TablistContentComponent,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  aboutSkillList: string[] = aboutSkillsSection;
  experienceInfo: PortfolioInformation[] = dataWorkExperience;
  projectInfo: PortfolioInformation[] = dataProject;
}
