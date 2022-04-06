import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../types';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
recipes$: Observable<Recipe[]> = of([])

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.recipes$ = this.recipeService.getRecipes()
  }

}
