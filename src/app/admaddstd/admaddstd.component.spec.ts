import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmaddstdComponent } from './admaddstd.component';

describe('AdmaddstdComponent', () => {
  let component: AdmaddstdComponent;
  let fixture: ComponentFixture<AdmaddstdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmaddstdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmaddstdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
