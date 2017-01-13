/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { KeyboardSearchService } from './hero-search.service';

describe('Service: HeroSearch', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KeyboardSearchService]
    });
  });

  it('should ...', inject([KeyboardSearchService], (service: KeyboardSearchService) => {
    expect(service).toBeTruthy();
  }));
});
