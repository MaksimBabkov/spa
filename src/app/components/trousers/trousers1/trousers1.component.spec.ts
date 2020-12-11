import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Trousers1Component } from './trousers1.component';

describe('Trousers1Component', () => {
  let component: Trousers1Component;
  let fixture: ComponentFixture<Trousers1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Trousers1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Trousers1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
