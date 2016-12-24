/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TmTagWrapperService } from './tm-tag-wrapper.service';

describe('TmTagWrapperService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TmTagWrapperService]
    });
  });

  it('should ...', inject([TmTagWrapperService], (service: TmTagWrapperService) => {
    expect(service).toBeTruthy();
  }));
});
