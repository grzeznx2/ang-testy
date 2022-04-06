import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe } from './types';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private http: HttpClient) { }

  createRecipe(recipe: Recipe) {
    return this.http.post('http://localhost:3000/recipes', recipe)
  }

  getRecipes(){
    return this.http.get<Recipe[]>(`http://localhost:3000/recipes`)
  }
}
