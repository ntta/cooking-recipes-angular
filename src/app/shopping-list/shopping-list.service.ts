import { Injectable, EventEmitter } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';

@Injectable()
export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
    new Ingredient('Potatoes', 3),
  ];

  getIngredients(): Ingredient[] {
    return [...this.ingredients];
  }

  addIngredient(ingredient: Ingredient) {
    const foundIndex = this.ingredients.findIndex(
      (ing) => ing.name === ingredient.name
    );
    if (foundIndex < 0) {
      this.ingredients.push(ingredient);
    } else {
      this.ingredients[foundIndex].amount += ingredient.amount;
    }
    this.ingredientsChanged.emit([...this.ingredients]);
  }

  addIngredients(ingredients: Ingredient[]) {
    ingredients.map((ingredient) => {
      const foundIndex = this.ingredients.findIndex(
        (ing) => ing.name === ingredient.name
      );
      if (foundIndex < 0) {
        this.ingredients.push(ingredient);
      } else {
        this.ingredients[foundIndex].amount += ingredient.amount;
      }
    });
    this.ingredientsChanged.emit([...this.ingredients]);
  }
}
