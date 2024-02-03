import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from "@angular/material/button";

import 'hammerjs';

//Esto de aquí hace parte de un modulo generado por el comnado ng g module nombre, sirve para el enrutamiento de angular
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { DishdetailComponent } from './dishdetail/dishdetail.component'

//Esto es un servicio de angular por lo tanto se debe poner en providers y no en imports
import { DishService } from './services/dish.service';
import { PromotionService} from './services/promotion.service';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';


export const routes:Routes = [
  {path:'home',component:HomeComponent},
  {path:'about', component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'menu',component:MenuComponent},
  {path:'dishdetail/:id',component:DishdetailComponent},
  {path:'', redirectTo:'/home',pathMatch:'full'},
]


//Todas las importaciones que haga se deben exportar en la sección llamada imports

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DishdetailComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ DishService, PromotionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
