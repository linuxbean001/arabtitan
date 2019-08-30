import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WantToPromoteArbtitanComponent } from './want-to-promote-arbtitan.component';

describe('WantToPromoteArbtitanComponent', () => {
  let component: WantToPromoteArbtitanComponent;
  let fixture: ComponentFixture<WantToPromoteArbtitanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WantToPromoteArbtitanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WantToPromoteArbtitanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
