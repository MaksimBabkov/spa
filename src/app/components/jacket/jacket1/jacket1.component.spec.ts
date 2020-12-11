import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Jacket1Component } from './jacket1.component';

describe('Jacket1Component', () => {
  let component: Jacket1Component;
  let fixture: ComponentFixture<Jacket1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Jacket1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Jacket1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
