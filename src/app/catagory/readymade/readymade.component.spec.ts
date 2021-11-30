import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadymadeComponent } from './readymade.component';

describe('ReadymadeComponent', () => {
  let component: ReadymadeComponent;
  let fixture: ComponentFixture<ReadymadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadymadeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadymadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
