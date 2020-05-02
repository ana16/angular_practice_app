import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsideAlertComponent } from './inside-alert.component';

describe('InsideAlertComponent', () => {
  let component: InsideAlertComponent;
  let fixture: ComponentFixture<InsideAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsideAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsideAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
