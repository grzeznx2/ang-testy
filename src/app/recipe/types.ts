export interface Ingredient {
  name: string
  amount?: number
  unit?: string
}

export interface Recipe {
  name: string
  description: string
  ingredients: Ingredient[]
}
