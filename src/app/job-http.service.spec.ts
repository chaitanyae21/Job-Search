import { TestBed } from '@angular/core/testing';

import { JobHttpService } from './job-http.service';

describe('JobHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JobHttpService = TestBed.get(JobHttpService);
    expect(service).toBeTruthy();
  });
});
