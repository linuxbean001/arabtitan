import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TierHeaderComponent } from './tier-header.component';

describe('TierHeaderComponent', () => {
  let component: TierHeaderComponent;
  let fixture: ComponentFixture<TierHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TierHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TierHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
