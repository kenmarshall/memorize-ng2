/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TextManagerService } from './text-manager.service';

describe('TextManagerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TextManagerService]
    });
  });

  it('should ...', inject([TextManagerService], (service: TextManagerService) => {
    expect(service).toBeTruthy();
  }));
});
