import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { Role } from '../auth/types';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

  public user: {email: string, roles: Role[]} | null = null
  private _subscriptions: Subscription[] = []

  constructor(private authService: AuthService) { }

  get isAuthor(){
    return this.user?.roles.includes('AUTHOR')
  }

  ngOnInit(): void {
   this._subscriptions.push(this.authService.user$.subscribe(result=> this.user = result))
  }

  ngOnDestroy(): void {
    this._subscriptions.forEach(subscription=>subscription.unsubscribe())
  }

}
