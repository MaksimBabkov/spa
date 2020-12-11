import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpringSummerComponent } from './spring-summer.component';

describe('SpringSummerComponent', () => {
  let component: SpringSummerComponent;
  let fixture: ComponentFixture<SpringSummerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpringSummerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpringSummerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
