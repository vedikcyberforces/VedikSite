import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinrequestsComponent } from './joinrequests.component';

describe('JoinrequestsComponent', () => {
  let component: JoinrequestsComponent;
  let fixture: ComponentFixture<JoinrequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JoinrequestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinrequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
