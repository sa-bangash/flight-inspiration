import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightFilterContainer } from './flight-filter.container';

describe('FlightFilter.ContainerComponent', () => {
  let component: FlightFilterContainer;
  let fixture: ComponentFixture<FlightFilterContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FlightFilterContainer],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightFilterContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
