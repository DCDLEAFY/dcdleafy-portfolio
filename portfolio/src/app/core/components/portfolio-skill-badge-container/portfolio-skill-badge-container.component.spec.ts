import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioSkillBadgeContainerComponent } from './portfolio-skill-badge-container.component';

describe('PortfolioSkillBadgeContainerComponent', () => {
  let component: PortfolioSkillBadgeContainerComponent;
  let fixture: ComponentFixture<PortfolioSkillBadgeContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioSkillBadgeContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PortfolioSkillBadgeContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
