import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FtystudentComponent } from './ftystudent.component';

describe('FtystudentComponent', () => {
  let component: FtystudentComponent;
  let fixture: ComponentFixture<FtystudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FtystudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FtystudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
