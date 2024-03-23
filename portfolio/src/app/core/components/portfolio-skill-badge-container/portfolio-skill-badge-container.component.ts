import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-portfolio-skill-badge-container',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './portfolio-skill-badge-container.component.html',
  styleUrl: './portfolio-skill-badge-container.component.scss'
})
export class PortfolioSkillBadgeContainerComponent {
  @Input({required: true}) inputSkills!: string[];
}
