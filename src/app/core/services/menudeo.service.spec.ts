import { TestBed } from '@angular/core/testing';

import { MenudeoService } from './menudeo.service';

describe('MenudeoService', () => {
  let service: MenudeoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenudeoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
