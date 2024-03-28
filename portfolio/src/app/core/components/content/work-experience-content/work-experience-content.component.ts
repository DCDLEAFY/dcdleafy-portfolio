import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
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
export class WorkExperienceContentComponent implements OnInit {
  @Input({required: true}) experienceInfo :PortfolioInformation[] = [];
  active!: string;
  
  ngOnInit(): void {
    this.active = this.experienceInfo[0].name;
  }
}
