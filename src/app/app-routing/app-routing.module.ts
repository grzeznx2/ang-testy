import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { FormSwitchComponent } from '../auth/form-switch/form-switch.component';
import { DashboardAuthorComponent } from '../dashboard/dashboard-author/dashboard-author.component';
import { DashboardUserComponent } from '../dashboard/dashboard-user/dashboard-user.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { RecipeDetailsComponent } from '../recipe/recipe-details/recipe-details.component';
import { RecipeFormComponent } from '../recipe/recipe-form/recipe-form.component';
import { AuthGuard } from '../shared/guards/auth.guard';
import { RoleGuard } from '../shared/guards/role.guard';

const routes: Route[] = [{
  path: 'auth',
  component: FormSwitchComponent,

},
{
path: 'dashboard',
component: DashboardComponent,
canActivate: [AuthGuard],
children: [
  {
    path: 'author',
    component: DashboardAuthorComponent,
    canActivate: [RoleGuard],
    data: {
      roles: ['AUTHOR']
    },
    children: [
      {
        path: 'add-recipe',
        component: RecipeFormComponent,
        canActivate: [RoleGuard],
        data: {
          roles: ['AUTHOR']
        }
      },
      {
        path: 'recipe',
        // path: 'recipe/:recipeId',
        component: RecipeDetailsComponent,
        canActivate: [RoleGuard],
        data: {
          roles: ['AUTHOR']
        }
      },
      {
        // path: 'recipe',
        path: 'recipe/:recipeId',
        component: RecipeDetailsComponent,
        canActivate: [RoleGuard],
        data: {
          roles: ['AUTHOR']
        }
      },
    ]
  },
  {
    path: 'user/recipe',
    component: DashboardUserComponent,
    // canActivate: [RoleGuard],
    // data: {
    //   roles: ['AUTHOR']
    // }
  },
  {
    path: 'user/recipe/:recipeId  ',
    component: DashboardUserComponent,
    // canActivate: [RoleGuard],
    // data: {
    //   roles: ['AUTHOR']
    // }
  },
]
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
