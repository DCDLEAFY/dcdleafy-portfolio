import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-portfolio-skill-badges',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './portfolio-skill-badges.component.html',
  styleUrl: './portfolio-skill-badges.component.scss'
})
export class PortfolioSkillBadgesComponent {
  @Input({required: true}) skillList!: string[];
  @Input() classType! : string;

  getClass(): string {
    switch(this.classType){        
      case('secondary'):
        return 'skill-badge-secondary';
      default:
        return 'skill-badge';
    }
  }
}
