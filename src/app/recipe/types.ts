export interface Ingredient {
  name: string
  amount?: number
  unit?: string
}

export interface Recipe {
  name: string
  description: string
  id: number
  rate: number
  ingredients: Ingredient[]
}
