import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioCardContentComponent } from './portfolio-card-content.component';

describe('PortfolioCardContentComponent', () => {
  let component: PortfolioCardContentComponent;
  let fixture: ComponentFixture<PortfolioCardContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioCardContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PortfolioCardContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
