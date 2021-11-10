import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesLaserHairComponent } from './services-laser-hair.component';

describe('ServicesLaserHairComponent', () => {
  let component: ServicesLaserHairComponent;
  let fixture: ComponentFixture<ServicesLaserHairComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesLaserHairComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesLaserHairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
