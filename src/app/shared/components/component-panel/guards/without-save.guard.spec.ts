import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { withoutSaveGuard } from './without-save.guard';

describe('withoutSaveGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => withoutSaveGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
