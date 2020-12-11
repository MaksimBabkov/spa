import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Shirt1Component } from './shirt1.component';

describe('Shirt1Component', () => {
  let component: Shirt1Component;
  let fixture: ComponentFixture<Shirt1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Shirt1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Shirt1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
