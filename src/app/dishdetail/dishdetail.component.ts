import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {

  private route: ActivatedRoute
  dish: Dish;

  constructor(private dishService: DishService, private location: Location, private activatedRoute: ActivatedRoute){

  }

  ngOnInit(): void {
    //Esto permitirá al path saber cuál id es cuál poniendo /dishdetail/9 por ejemplo
    let id = this.activatedRoute.snapshot.params['id'];
    this.dish = this.dishService.getDish(id)
    console.log('Dish:', this.dish);
  }

  goBack(): void{
    //Va a la dirección anterior en el que estabamos
    this.location.back();
  }

}
