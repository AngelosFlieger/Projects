import { TestBed } from '@angular/core/testing';

import { ScreenCommunication2Service } from './screen-communication2.service';

describe('ScreenCommunication2Service', () => {
  let service: ScreenCommunication2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScreenCommunication2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
