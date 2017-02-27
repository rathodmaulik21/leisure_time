/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LtFeedsHttpService } from './lt-feeds-http.service';

describe('LtFeedsHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LtFeedsHttpService]
    });
  });

  it('should ...', inject([LtFeedsHttpService], (service: LtFeedsHttpService) => {
    expect(service).toBeTruthy();
  }));
});
