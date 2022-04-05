import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { map, tap } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router){

  }
  canActivate(
    route: ActivatedRouteSnapshot
    ) {
      return this.authService.user$.pipe(map((user)=>{
        if(user) return !!user
       return this.router.createUrlTree(['auth'])
      }))
  }

}
