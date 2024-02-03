import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }

  //Esto significa que el getDishes va a devolver una lista de objetos de tipo Dish eso se puede saber gracias al :Dish[]
  //Nota: Dish es la clase mientras que DISHES es el objeto de tipo array con la información de los 4 platos que se muestran en el componente menu
  getDishes(): Dish[] {
    return DISHES;
  }

  getDish(id: string): Dish {
    return DISHES.filter((dish) => dish.id == id)[0]
  }

  getFeaturedDish(): Dish {
    return DISHES.filter((dish) => dish.featured)[0]
  }
}
