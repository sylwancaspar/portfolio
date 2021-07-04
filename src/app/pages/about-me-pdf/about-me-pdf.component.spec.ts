import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMePdfComponent } from './about-me-pdf.component';

describe('AboutMePdfComponent', () => {
  let component: AboutMePdfComponent;
  let fixture: ComponentFixture<AboutMePdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutMePdfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutMePdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
