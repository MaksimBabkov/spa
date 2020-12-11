import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Jacket2Component } from './jacket2.component';

describe('Jacket2Component', () => {
  let component: Jacket2Component;
  let fixture: ComponentFixture<Jacket2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Jacket2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Jacket2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
