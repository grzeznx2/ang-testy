import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReplaySubject, tap } from 'rxjs';
import { Recipe } from './types';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private selectedRecipe = new ReplaySubject<Recipe>(1)

  constructor(private http: HttpClient) { }

  get selectedRecipe$(){
    return this.selectedRecipe.asObservable()
  }

  createRecipe(recipe: Recipe) {
    return this.http.post('http://localhost:3000/recipes', recipe)
  }

  getRecipes(){
    return this.http.get<Recipe[]>(`http://localhost:3000/recipes`)
  }

  getRecipeByName(name:string){
    return this.http.get<Recipe[]>(`http://localhost:3000/recipes?name_like=${name}`)
  }


  getSortedRecipes(sort:string, order: string){
    return this.http.get<Recipe[]>(`http://localhost:3000/recipes?_sort=${sort}&_order=${order}`)
  }

  getRecipeById(id: number){
    return this.http.get<Recipe[]>(`http://localhost:3000/recipes?id=${id}`).pipe(tap(res=>{
    console.log(res)
      return this.selectedRecipe.next(res[0])
    }
    ))
  }
}
