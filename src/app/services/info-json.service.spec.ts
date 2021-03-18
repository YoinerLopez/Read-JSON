import { TestBed } from '@angular/core/testing';

import { InfoJSONService } from './info-json.service';

describe('InfoJSONService', () => {
  let service: InfoJSONService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfoJSONService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
