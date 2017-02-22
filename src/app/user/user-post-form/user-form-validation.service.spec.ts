/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UserFormValidationService } from './user-form-validation.service';

describe('UserFormValidationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserFormValidationService]
    });
  });

  it('should ...', inject([UserFormValidationService], (service: UserFormValidationService) => {
    expect(service).toBeTruthy();
  }));
});
