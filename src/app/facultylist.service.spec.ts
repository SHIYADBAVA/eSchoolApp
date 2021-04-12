import { TestBed } from '@angular/core/testing';

import { FacultylistService } from './facultylist.service';

describe('FacultylistService', () => {
  let service: FacultylistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FacultylistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
