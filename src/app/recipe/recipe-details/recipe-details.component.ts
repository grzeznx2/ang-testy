import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable} from 'rxjs';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../types';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit {

  recipe$!: Observable<Recipe>
  selectedId!: number

  constructor(private recipeService: RecipeService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.recipe$ = this.recipeService.selectedRecipe$
   console.log(this.route.snapshot.paramMap.get('recipeId'))
  }

}
