import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tier3Component } from './tier3.component';

describe('Tier3Component', () => {
  let component: Tier3Component;
  let fixture: ComponentFixture<Tier3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tier3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tier3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
