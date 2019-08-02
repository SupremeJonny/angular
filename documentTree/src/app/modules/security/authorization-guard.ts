import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthorizationService } from './authorization.service';
/**
 * AuthorizationGuard for router navigation
 * todo
 *  - add logic in canActivate
 *  - add logic in isAuthorized
 */
@Injectable({
    providedIn: 'root'
})
export class AuthorizationGuard implements CanActivate {

    constructor(private authService: AuthorizationService,
        private router: Router) { }

    // overwrite
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (!this.authService.isAuthenticated()) {
            window.location.href = 'index.html';
        }
        const isAuthorized = this.isAuthorized(route);
        return isAuthorized;
    }

    //
    private isAuthorized(route: ActivatedRouteSnapshot): boolean {
        return true;
    }

}
