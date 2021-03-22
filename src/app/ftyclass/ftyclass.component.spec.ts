import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FtyclassComponent } from './ftyclass.component';

describe('FtyclassComponent', () => {
  let component: FtyclassComponent;
  let fixture: ComponentFixture<FtyclassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FtyclassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FtyclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
