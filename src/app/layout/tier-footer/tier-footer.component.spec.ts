import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TierFooterComponent } from './tier-footer.component';

describe('TierFooterComponent', () => {
  let component: TierFooterComponent;
  let fixture: ComponentFixture<TierFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TierFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TierFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
