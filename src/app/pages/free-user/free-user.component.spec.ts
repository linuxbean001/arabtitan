import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeUserComponent } from './free-user.component';

describe('FreeUserComponent', () => {
  let component: FreeUserComponent;
  let fixture: ComponentFixture<FreeUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreeUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
