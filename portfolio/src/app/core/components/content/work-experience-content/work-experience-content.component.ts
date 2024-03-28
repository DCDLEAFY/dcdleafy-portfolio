import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { dataWorkExperience } from '../../../../../assets/data/data'; 
import { PortfolioInformation } from '../../../models/portfolio-information';
import { PortfolioSkillBadgesComponent } from '../../portfolio-skill-badges/portfolio-skill-badges.component';

@Component({
  selector: 'app-work-experience-content',
  standalone: true,
  imports: [
    NgbNavModule,
    CommonModule,
    PortfolioSkillBadgesComponent
  ],
  templateUrl: './work-experience-content.component.html',
  styleUrl: './work-experience-content.component.scss'
})
export class WorkExperienceContentComponent {
  experienceInfo:PortfolioInformation[] = dataWorkExperience;
  active = this.experienceInfo[0].name;

}
