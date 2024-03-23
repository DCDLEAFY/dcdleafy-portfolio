import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FolioContainerComponent } from './portfolio-nav.component';

describe('FolioNavContainerComponent', () => {
  let component: FolioContainerComponent;
  let fixture: ComponentFixture<FolioContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FolioContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FolioContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
