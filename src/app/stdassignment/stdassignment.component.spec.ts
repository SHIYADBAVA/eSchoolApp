import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdassignmentComponent } from './stdassignment.component';

describe('StdassignmentComponent', () => {
  let component: StdassignmentComponent;
  let fixture: ComponentFixture<StdassignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StdassignmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StdassignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
