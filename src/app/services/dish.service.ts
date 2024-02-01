import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }

  //Esto significa que el getDishes va a devolver una lista de objetos de tipo Dish
  getDishes(): Dish[] {
    return DISHES;
  }
}
