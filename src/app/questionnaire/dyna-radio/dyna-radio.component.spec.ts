import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynaRadioComponent } from './dyna-radio.component';

describe('DynaRadioComponent', () => {
  let component: DynaRadioComponent;
  let fixture: ComponentFixture<DynaRadioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynaRadioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynaRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
