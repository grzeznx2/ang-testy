import { Component, OnDestroy, OnInit } from '@angular/core';
import {  Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { Role } from '../auth/types';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  public user: {email: string, roles: Role[]} | null = null
  private _subscriptions: Subscription[] = []

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
   this._subscriptions.push(this.authService.user$.subscribe(result=> this.user = result))
  }

  ngOnDestroy(): void {
    this._subscriptions.forEach(subscription=>subscription.unsubscribe())
  }

  logout(){
    this.authService.logout()
  }
}
