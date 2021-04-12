import { TestBed } from '@angular/core/testing';

import { AdmstudentService } from './admstudent.service';

describe('AdmstudentService', () => {
  let service: AdmstudentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdmstudentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
