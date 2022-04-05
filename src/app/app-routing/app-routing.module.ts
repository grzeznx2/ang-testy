import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { FormSwitchComponent } from '../auth/form-switch/form-switch.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { AuthGuard } from '../shared/guards/auth.guard';

const routes: Route[] = [{
  path: 'auth',
  component: FormSwitchComponent,

},
{
path: 'dashboard',
component: DashboardComponent,
canActivate: [AuthGuard]
},
{
  path: '',
  redirectTo: '/auth',
  pathMatch: 'full'
}
]

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
