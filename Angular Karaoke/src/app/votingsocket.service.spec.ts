import { TestBed } from '@angular/core/testing';

import { VotingsocketService } from './votingsocket.service';

describe('VotingsocketService', () => {
  let service: VotingsocketService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VotingsocketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
