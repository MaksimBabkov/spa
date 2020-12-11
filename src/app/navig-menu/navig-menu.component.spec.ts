import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigMenuComponent } from './navig-menu.component';

describe('NavigMenuComponent', () => {
  let component: NavigMenuComponent;
  let fixture: ComponentFixture<NavigMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
