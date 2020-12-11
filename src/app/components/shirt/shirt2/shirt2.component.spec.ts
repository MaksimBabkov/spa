import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Shirt2Component } from './shirt2.component';

describe('Shirt2Component', () => {
  let component: Shirt2Component;
  let fixture: ComponentFixture<Shirt2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Shirt2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Shirt2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
