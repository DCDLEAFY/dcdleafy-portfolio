import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioSkillBadgesComponent } from './portfolio-skill-badges.component';

describe('PortfolioSkillBadgesComponent', () => {
  let component: PortfolioSkillBadgesComponent;
  let fixture: ComponentFixture<PortfolioSkillBadgesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioSkillBadgesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PortfolioSkillBadgesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
