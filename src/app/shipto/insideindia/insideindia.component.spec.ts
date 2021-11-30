import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsideindiaComponent } from './insideindia.component';

describe('InsideindiaComponent', () => {
  let component: InsideindiaComponent;
  let fixture: ComponentFixture<InsideindiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsideindiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsideindiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
