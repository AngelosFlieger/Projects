import { TestBed } from '@angular/core/testing';

import { JoinlobbyService } from './joinlobby.service';

describe('JoinlobbyService', () => {
  let service: JoinlobbyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JoinlobbyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
