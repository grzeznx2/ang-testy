import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.scss']
})
export class RecipeFormComponent implements OnInit {

  public recipeForm!: FormGroup

  constructor(private formBuilder: FormBuilder) { }

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

  onSubmit(){
    console.log(this.recipeForm.value)
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
