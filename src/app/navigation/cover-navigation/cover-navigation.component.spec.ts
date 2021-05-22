import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoverNavigationComponent } from './cover-navigation.component';

describe('CoverNavigationComponent', () => {
  let component: CoverNavigationComponent;
  let fixture: ComponentFixture<CoverNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoverNavigationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoverNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
