import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyWorkDetailsComponent } from './my-work-details.component';

describe('MyWorkDetailsComponent', () => {
  let component: MyWorkDetailsComponent;
  let fixture: ComponentFixture<MyWorkDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyWorkDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyWorkDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
