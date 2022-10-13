import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OriginSelectComponent } from './origin-select.component';

describe('OriginSelectComponent', () => {
  let component: OriginSelectComponent;
  let fixture: ComponentFixture<OriginSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OriginSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OriginSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
