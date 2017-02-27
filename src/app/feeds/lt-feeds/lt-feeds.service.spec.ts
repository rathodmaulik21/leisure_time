/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LtFeedsService } from './lt-feeds.service';

describe('LtFeedsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LtFeedsService]
    });
  });

  it('should ...', inject([LtFeedsService], (service: LtFeedsService) => {
    expect(service).toBeTruthy();
  }));
});
