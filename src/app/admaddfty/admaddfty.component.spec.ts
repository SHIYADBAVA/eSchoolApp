import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmaddftyComponent } from './admaddfty.component';

describe('AdmaddftyComponent', () => {
  let component: AdmaddftyComponent;
  let fixture: ComponentFixture<AdmaddftyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmaddftyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmaddftyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
