/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BibleService } from './bible.service';

describe('BibleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BibleService]
    });
  });

  it('should ...', inject([BibleService], (service: BibleService) => {
    expect(service).toBeTruthy();
  }));
});
