import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderStepBannerComponent } from './header-step-banner.component';

describe('HeaderStepBannerComponent', () => {
  let component: HeaderStepBannerComponent;
  let fixture: ComponentFixture<HeaderStepBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderStepBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderStepBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
