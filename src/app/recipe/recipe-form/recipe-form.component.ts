import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalService } from 'src/app/shared/modal/modal.service';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.scss']
})
export class RecipeFormComponent implements OnInit {

  // @ViewChild('modal') modal!: ElementRef<HTMLDivElement>
  public rate = 3
  public rateClicked = false
  public recipeForm!: FormGroup
  public isLoading = false
  public isModalOpen = false
  constructor(private formBuilder: FormBuilder, private recipeService: RecipeService, private modalService: ModalService) { }

  get ingredients(){
    return this.recipeForm.controls['ingredients'] as FormArray
  }

  ngOnInit(): void {
    this.recipeForm = this._initializeForm()
    console.log(this.recipeForm)
  }

  setCurrentRate(rate: number){
    this.rate = rate
  }

  toggleModal(){
    this.isModalOpen = !this.isModalOpen
  }

  // handleRateClick(rate: number){
  //   this.rateClicked = true
  //   this.rate = rate
  // }

  // setCurrentRate(rate: number){
  //   if(this.rateClicked) return
  //   this.rate = rate
  //   console.log(this.rate)
  // }

  addIngredient(){
    this.ingredients.push(this._createIngredient())
  }

  removeIngredient(index: number) {
    this.ingredients.removeAt(index)
  }

  createRecipe(){

    this.isLoading = true
    this.recipeService.createRecipe({...this.recipeForm.value, rate: this.rate}).subscribe(()=>
    {
      this.isLoading = false
      this.toggleModal()
    }
    )
  }

  onSubmit(){
    this.toggleModal()
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
