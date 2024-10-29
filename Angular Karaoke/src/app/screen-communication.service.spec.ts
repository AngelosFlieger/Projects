import { TestBed } from '@angular/core/testing';

import { ScreenCommunicationService } from './screen-communication.service';

describe('ScreenCommunicationService', () => {
  let service: ScreenCommunicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScreenCommunicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
