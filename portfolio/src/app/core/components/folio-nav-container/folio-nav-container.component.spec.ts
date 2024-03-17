import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FolioNavContainerComponent } from './folio-nav-container.component';

describe('FolioNavContainerComponent', () => {
  let component: FolioNavContainerComponent;
  let fixture: ComponentFixture<FolioNavContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FolioNavContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FolioNavContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
