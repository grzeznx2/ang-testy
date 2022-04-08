import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { Role } from 'src/app/auth/types';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {

  @Input() name!: string
  @Input() id!: number
  @Input() rate!: number
  public user: {email: string, roles: Role[]} | null = null
  private _subscriptions: Subscription[] = []


  constructor(private recipeService: RecipeService, private route: ActivatedRoute, private router: Router, private authService: AuthService) { }

  getRecipe(){
    this.recipeService.getRecipeById(this.id).subscribe(()=>{
      if(this.user?.roles.includes('AUTHOR')){

        this.router.navigate(['dashboard', 'author', 'recipe', this.id])
      }else{
        this.router.navigate(['dashboard', 'user', 'recipe', this.id])

      }
    })
  }

  ngOnInit(): void {
    this._subscriptions.push(this.authService.user$.subscribe(result=> this.user = result))
  }

}
