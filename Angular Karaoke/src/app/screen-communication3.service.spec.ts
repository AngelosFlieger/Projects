import { TestBed } from '@angular/core/testing';

import { ScreenCommunication3Service } from './screen-communication3.service';

describe('ScreenCommunication3Service', () => {
  let service: ScreenCommunication3Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScreenCommunication3Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
