import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.scss']
})
export class RecipeFormComponent implements OnInit {

  public recipeForm!: FormGroup
  public isLoading = false
  constructor(private formBuilder: FormBuilder, private recipeService: RecipeService) { }

  get ingredients(){
    return this.recipeForm.controls['ingredients'] as FormArray
  }

  ngOnInit(): void {
    this.recipeForm = this._initializeForm()
    console.log(this.recipeForm)
  }

  addIngredient(){
    this.ingredients.push(this._createIngredient())
  }

  removeIngredient(index: number) {
    this.ingredients.removeAt(index)
  }

  onSubmit(){
    this.isLoading = true
    this.recipeService.createRecipe(this.recipeForm.value).subscribe(()=>this.isLoading = false)
  }

  private _initializeForm(){
    return this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      ingredients: this.formBuilder.array([
        this._createIngredient()
      ])
    })
  }

private _createIngredient(): FormGroup{
  return new FormGroup({
    name: new FormControl('', Validators.required),
    amount: new FormControl(0),
    unit: new FormControl('')
  })
}

}
