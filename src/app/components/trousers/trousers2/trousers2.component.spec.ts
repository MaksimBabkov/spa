import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Trousers2Component } from './trousers2.component';

describe('Trousers2Component', () => {
  let component: Trousers2Component;
  let fixture: ComponentFixture<Trousers2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Trousers2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Trousers2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
