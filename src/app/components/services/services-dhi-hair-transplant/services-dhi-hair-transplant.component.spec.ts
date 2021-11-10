import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesDhiHairTransplantComponent } from './services-dhi-hair-transplant.component';

describe('ServicesDhiHairTransplantComponent', () => {
  let component: ServicesDhiHairTransplantComponent;
  let fixture: ComponentFixture<ServicesDhiHairTransplantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesDhiHairTransplantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesDhiHairTransplantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
