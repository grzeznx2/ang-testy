import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { Role, UserPayload } from './types';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user = new BehaviorSubject<{roles: Role[], email: string} | null>(null)

  constructor(private http: HttpClient) { }

  get user$(){
    return this.user.asObservable()
  }

  setUser(user: {roles: Role[], email: string} | null){
    this.user.next(user)
  }

  register(user: UserPayload){
   return this.http.post('http://localhost:3000/users', user).pipe(tap(()=>this.setUser(user)))
  }

  login(user: UserPayload){
    return this.http.get<UserPayload>(`http://localhost:3000/users?email=${user.email}&password=${user.password}`).pipe(tap((res)=>this.setUser(res)))
   }

   logout(){
     this.setUser(null)
   }
}
