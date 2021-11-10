import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesUnshavenHairTransplantComponent } from './services-unshaven-hair-transplant.component';

describe('ServicesUnshavenHairTransplantComponent', () => {
  let component: ServicesUnshavenHairTransplantComponent;
  let fixture: ComponentFixture<ServicesUnshavenHairTransplantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesUnshavenHairTransplantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesUnshavenHairTransplantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
