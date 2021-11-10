import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesMesotherapyComponent } from './services-mesotherapy.component';

describe('ServicesMesotherapyComponent', () => {
  let component: ServicesMesotherapyComponent;
  let fixture: ComponentFixture<ServicesMesotherapyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesMesotherapyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesMesotherapyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
