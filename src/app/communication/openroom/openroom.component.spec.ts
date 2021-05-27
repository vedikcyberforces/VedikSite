import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenroomComponent } from './openroom.component';

describe('OpenroomComponent', () => {
  let component: OpenroomComponent;
  let fixture: ComponentFixture<OpenroomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenroomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
