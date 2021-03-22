import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmclassComponent } from './admclass.component';

describe('AdmclassComponent', () => {
  let component: AdmclassComponent;
  let fixture: ComponentFixture<AdmclassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmclassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
