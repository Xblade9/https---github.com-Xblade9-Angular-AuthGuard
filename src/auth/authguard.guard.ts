import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable, map } from 'rxjs';
import { inject } from '@angular/core';
import { AuthServiceService } from 'src/app/auth-service.service';

export const authguardGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): boolean | Observable<boolean | UrlTree> | Promise<boolean> => {
  const authSvc = inject(AuthServiceService);
  const router = inject(Router);

  if (!authSvc.isLoggedIn()) {
    router.navigate(['/login']); //go to login if not authenticated.
    return false;
  }
  return true;
};
