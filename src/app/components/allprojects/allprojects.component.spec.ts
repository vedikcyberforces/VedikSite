import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ALLProjectsComponent } from './allprojects.component';

describe('ALLProjectsComponent', () => {
  let component: ALLProjectsComponent;
  let fixture: ComponentFixture<ALLProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ALLProjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ALLProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
