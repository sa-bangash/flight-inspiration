import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightInspirationComponent } from './flight-inspiration.component';

describe('FlightInspirationComponent', () => {
  let component: FlightInspirationComponent;
  let fixture: ComponentFixture<FlightInspirationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlightInspirationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightInspirationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
