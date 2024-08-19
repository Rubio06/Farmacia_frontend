import { CanActivateFn } from '@angular/router';

export const withoutSaveGuard: CanActivateFn = (route, state) => {
  return true;
};
