import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavStripesComponent } from './nav-stripes.component';

describe('NavStripesComponent', () => {
  let component: NavStripesComponent;
  let fixture: ComponentFixture<NavStripesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavStripesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavStripesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
