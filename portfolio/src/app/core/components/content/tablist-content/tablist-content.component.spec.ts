import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablistContentComponent } from './tablist-content.component';

describe('TablistContentComponent', () => {
  let component: TablistContentComponent;
  let fixture: ComponentFixture<TablistContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablistContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TablistContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
