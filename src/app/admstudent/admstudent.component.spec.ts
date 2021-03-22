import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmstudentComponent } from './admstudent.component';

describe('AdmstudentComponent', () => {
  let component: AdmstudentComponent;
  let fixture: ComponentFixture<AdmstudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmstudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmstudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
