import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesBeardMustacheTransplantComponent } from './services-beard-mustache-transplant.component';

describe('ServicesBeardMustacheTransplantComponent', () => {
  let component: ServicesBeardMustacheTransplantComponent;
  let fixture: ComponentFixture<ServicesBeardMustacheTransplantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesBeardMustacheTransplantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesBeardMustacheTransplantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
