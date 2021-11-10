import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesWomenHairPlantComponent } from './services-women-hair-plant.component';

describe('ServicesWomenHairPlantComponent', () => {
  let component: ServicesWomenHairPlantComponent;
  let fixture: ComponentFixture<ServicesWomenHairPlantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesWomenHairPlantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesWomenHairPlantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
