import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderlineComponent } from './headerline.component';

describe('HeaderlineComponent', () => {
  let component: HeaderlineComponent;
  let fixture: ComponentFixture<HeaderlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderlineComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
