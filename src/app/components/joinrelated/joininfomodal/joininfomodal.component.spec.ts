import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoininfomodalComponent } from './joininfomodal.component';

describe('JoininfomodalComponent', () => {
  let component: JoininfomodalComponent;
  let fixture: ComponentFixture<JoininfomodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JoininfomodalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JoininfomodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
