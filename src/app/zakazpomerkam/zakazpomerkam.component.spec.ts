import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZakazpomerkamComponent } from './zakazpomerkam.component';

describe('ZakazpomerkamComponent', () => {
  let component: ZakazpomerkamComponent;
  let fixture: ComponentFixture<ZakazpomerkamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZakazpomerkamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZakazpomerkamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
