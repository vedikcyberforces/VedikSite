import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectmodelComponent } from './projectmodel.component';

describe('ProjectmodelComponent', () => {
  let component: ProjectmodelComponent;
  let fixture: ComponentFixture<ProjectmodelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectmodelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectmodelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
