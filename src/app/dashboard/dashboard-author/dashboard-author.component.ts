import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { Role } from 'src/app/auth/types';
import { RecipeService } from 'src/app/recipe/recipe.service';
import { Recipe } from 'src/app/recipe/types';

@Component({
  selector: 'app-dashboard-author',
  templateUrl: './dashboard-author.component.html',
  styleUrls: ['./dashboard-author.component.scss']
})
export class DashboardAuthorComponent implements OnInit, OnDestroy {

  public user: {email: string, roles: Role[]} | null = null
  recipe$!: Observable<Recipe>
  private _subscriptions: Subscription[] = []

  constructor(private authService: AuthService, private recipeService: RecipeService) { }

  get isAuthor(){
    return this.user?.roles.includes('AUTHOR')
  }

  ngOnInit(): void {
   this._subscriptions.push(this.authService.user$.subscribe(result=> this.user = result))
   this.recipe$ = this.recipeService.selectedRecipe$
  }

  ngOnDestroy(): void {
    this._subscriptions.forEach(subscription=>subscription.unsubscribe())
  }

}
