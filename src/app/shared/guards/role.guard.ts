import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router} from '@angular/router';
import { map} from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { Role } from 'src/app/auth/types';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(private authService: AuthService){}
  canActivate(
    route: ActivatedRouteSnapshot) {
      const allowedRole = route.data['roles'][0] as Role
      return this.authService.user$.pipe(map(user=>{
        if(user === null) return false
        if(user.roles.includes(allowedRole)) return true
        return false
      }))
  }

}
