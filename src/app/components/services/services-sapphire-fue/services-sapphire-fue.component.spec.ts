import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesSapphireFueComponent } from './services-sapphire-fue.component';

describe('ServicesSapphireFueComponent', () => {
  let component: ServicesSapphireFueComponent;
  let fixture: ComponentFixture<ServicesSapphireFueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesSapphireFueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesSapphireFueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
