import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyUseUsPageComponent } from './why-use-us-page.component';

describe('WhyUseUsPageComponent', () => {
  let component: WhyUseUsPageComponent;
  let fixture: ComponentFixture<WhyUseUsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhyUseUsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhyUseUsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
