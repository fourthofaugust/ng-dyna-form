import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynaInputComponent } from './dyna-input.component';

describe('DynaInputComponent', () => {
  let component: DynaInputComponent;
  let fixture: ComponentFixture<DynaInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynaInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynaInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
