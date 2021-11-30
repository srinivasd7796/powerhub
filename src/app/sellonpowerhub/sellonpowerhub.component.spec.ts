import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellonpowerhubComponent } from './sellonpowerhub.component';

describe('SellonpowerhubComponent', () => {
  let component: SellonpowerhubComponent;
  let fixture: ComponentFixture<SellonpowerhubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellonpowerhubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellonpowerhubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
