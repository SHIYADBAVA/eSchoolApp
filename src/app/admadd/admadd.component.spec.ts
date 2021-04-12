import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmaddComponent } from './admadd.component';

describe('AdmaddComponent', () => {
  let component: AdmaddComponent;
  let fixture: ComponentFixture<AdmaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmaddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
