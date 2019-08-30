import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatIsArbtitanPageComponent } from './what-is-arbtitan-page.component';

describe('WhatIsArbtitanPageComponent', () => {
  let component: WhatIsArbtitanPageComponent;
  let fixture: ComponentFixture<WhatIsArbtitanPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhatIsArbtitanPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatIsArbtitanPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
