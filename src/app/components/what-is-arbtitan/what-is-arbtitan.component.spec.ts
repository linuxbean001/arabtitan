import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatIsArbTitanComponent } from './what-is-arbtitan.component';

describe('WhatIsArbTitanComponent', () => {
  let component: WhatIsArbTitanComponent;
  let fixture: ComponentFixture<WhatIsArbTitanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhatIsArbTitanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatIsArbTitanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
