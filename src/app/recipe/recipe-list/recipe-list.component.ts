import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, of, Subscription } from 'rxjs';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../types';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit, OnDestroy {
recipes$: Observable<Recipe[]> = of([])
sort = new FormControl('A-Z')
query = new FormControl('')
private _subscriptions: Subscription[] = []

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this._initializeRecipes()
    this._subscribeSortChanges()
    this._subsrcribeQueryChanges()
  }

  ngOnDestroy(): void {
    this._subscriptions.forEach(subscription =>subscription.unsubscribe())
  }

  private _initializeRecipes(){
    this.recipes$ = this.recipeService.getRecipes()
  }

  private _subscribeSortChanges(){
   this._subscriptions.push(this.sort.valueChanges.subscribe((value: 'A-Z' | 'Z-A') => {

      const sortTypes = {
        'A-Z': {
          sort: 'name',
          order: 'asc'
        },
        'Z-A': {
          sort: 'name',
          order: 'desc'
        },
      }

      this.recipes$ = this.recipeService.getSortedRecipes(sortTypes[value].sort, sortTypes[value].order)
    }))
  }

  private _subsrcribeQueryChanges(){
  this._subscriptions.push(this.query.valueChanges.subscribe((value: string)=>{
      this.recipes$ = this.recipeService.getRecipeByName(value)
    }))
  }

}
