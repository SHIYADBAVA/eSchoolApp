import { TestBed } from '@angular/core/testing';

import { FtystudentService } from './ftystudent.service';

describe('FtystudentService', () => {
  let service: FtystudentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FtystudentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
