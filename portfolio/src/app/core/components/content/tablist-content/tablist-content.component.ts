import { Component, Input, OnInit } from '@angular/core';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { PortfolioInformation } from '../../../models/portfolio-information';
import { PortfolioSkillBadgesComponent } from '../../portfolio-skill-badges/portfolio-skill-badges.component';

@Component({
  selector: 'app-tablist-content',
  standalone: true,
  imports: [
    NgbNavModule,
    PortfolioSkillBadgesComponent
  ],
  templateUrl: './tablist-content.component.html',
  styleUrl: './tablist-content.component.scss'
})
export class TablistContentComponent implements OnInit {
  @Input({required: true}) contentInfo :PortfolioInformation[] = [];
  active!: string;
  
  ngOnInit(): void {
    this.active = this.contentInfo[0].name;
  }
}
