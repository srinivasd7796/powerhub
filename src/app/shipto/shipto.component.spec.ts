import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShiptoComponent } from './shipto.component';

describe('ShiptoComponent', () => {
  let component: ShiptoComponent;
  let fixture: ComponentFixture<ShiptoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShiptoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShiptoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
