import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradeshowsComponent } from './tradeshows.component';

describe('TradeshowsComponent', () => {
  let component: TradeshowsComponent;
  let fixture: ComponentFixture<TradeshowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TradeshowsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TradeshowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
