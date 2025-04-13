import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(
    private userService: UserService,
    private router: Router
  ) {}
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const currentUser = this.userService.getCurrentUser();
    
    if (!currentUser) {
      // Not logged in - redirect to login
      this.router.navigate(['/home/login']);
      return false;
    }
    
    // Check if route requires specific roles
    if (route.data?.['roles'] && !route.data['roles'].includes(currentUser.userType)) {
      // User doesn't have required role - redirect to appropriate dashboard
      this.redirectBasedOnUserType(currentUser.userType);
      return false;
    }
    
    return true;
  }
  
  private redirectBasedOnUserType(userType: string): void {
    switch (userType) {
      case 'Job Seeker':
        this.router.navigate(['/job-seeker/dashboard']);
        break;
      case 'Employer':
        this.router.navigate(['/employer/dashboard']);
        break;
      case 'Admin':
        this.router.navigate(['/admin/dashboard']);
        break;
      default:
        this.router.navigate(['/']);
        break;
    }
  }
}