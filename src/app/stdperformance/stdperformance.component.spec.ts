import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdperformanceComponent } from './stdperformance.component';

describe('StdperformanceComponent', () => {
  let component: StdperformanceComponent;
  let fixture: ComponentFixture<StdperformanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StdperformanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StdperformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
