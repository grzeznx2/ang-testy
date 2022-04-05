import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, take, tap } from 'rxjs';
import { Role, UserPayload } from './types';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user = new BehaviorSubject<{roles: Role[], email: string} | null>(null)

  constructor(private http: HttpClient, private router: Router) {
    this._initializeUser()
   }

  get user$(){
    return this.user.asObservable()
  }

  setUser(user: {roles: Role[], email: string} | null){
    let destination: string
    if(user === null){
      localStorage.removeItem('user')
      destination = 'auth'
    }else{
      localStorage.setItem('user', JSON.stringify(user))
      destination = 'dashboard'
    }
    this.user.next(user)
    this.router.navigate([destination])
  }

  register(user: UserPayload){
   return this.http.post('http://localhost:3000/users', user).pipe(tap(()=>this.setUser(user)))
  }

  login(user: UserPayload){
    return this.http.get<UserPayload[]>(`http://localhost:3000/users?email=${user.email}&password=${user.password}`).pipe(take(1), tap((res)=>this.setUser(res[0])))
   }

   logout(){
     this.setUser(null)
   }

   private _initializeUser(){
   const user =  localStorage.getItem('user')
   if(user){
     this.setUser(JSON.parse(user))
   }
   }
}
