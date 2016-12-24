/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TmHelperService } from './tm-helper.service';

describe('TmHelperService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TmHelperService]
    });
  });

  it('should ...', inject([TmHelperService], (service: TmHelperService) => {
    expect(service).toBeTruthy();
  }));

  it('should get indices from array matching regex', inject([TmHelperService], (service: TmHelperService) => {
  	let array = ['#1#', 'in', 'the','begining.', '#2#', 'this;', 'is'];
  	let expectedResult = [1,2,3,5,6];
  	expect(service.extractIndices(array, /[a-z]+/i)).toEqual(expectedResult);
  }));
});
