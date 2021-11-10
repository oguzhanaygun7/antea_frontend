import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesEyebrowTransplantComponent } from './services-eyebrow-transplant.component';

describe('ServicesEyebrowTransplantComponent', () => {
  let component: ServicesEyebrowTransplantComponent;
  let fixture: ComponentFixture<ServicesEyebrowTransplantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesEyebrowTransplantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesEyebrowTransplantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
