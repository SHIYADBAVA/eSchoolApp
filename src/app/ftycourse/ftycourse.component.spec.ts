import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FtycourseComponent } from './ftycourse.component';

describe('FtycourseComponent', () => {
  let component: FtycourseComponent;
  let fixture: ComponentFixture<FtycourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FtycourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FtycourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
