import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesPrpComponent } from './services-prp.component';

describe('ServicesPrpComponent', () => {
  let component: ServicesPrpComponent;
  let fixture: ComponentFixture<ServicesPrpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesPrpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesPrpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
