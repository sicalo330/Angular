import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from "@angular/material/button";
import {MatDialogModule} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import 'hammerjs';

//Esto de aquí hace parte de un modulo generado por el comnado ng g module nombre, sirve para el enrutamiento de angular
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';

//Estos son los componentes que he creado
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { DishdetailComponent } from './dishdetail/dishdetail.component'
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';

//Esto es un servicio de angular por lo tanto se debe poner en providers y no en imports
import { DishService } from './services/dish.service';
import { PromotionService} from './services/promotion.service';
import { LeaderService } from './services/leader.service';

//Esto permite crear el nombre de las rutas y mostrará el componente deseado
export const routes:Routes = [
  {path:'home',component:HomeComponent},
  {path:'about', component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'menu',component:MenuComponent},
  {path:'dishdetail/:id',component:DishdetailComponent},
  {path:'', redirectTo:'/home',pathMatch:'full'},
]


//Todas las importaciones que haga se deben exportar en la sección llamada imports y los componentes deben ser puestos en declarations aunque eso angular CLI lo hace automáticamente
//

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DishdetailComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent
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
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatSelectModule,
    MatSlideToggleModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ DishService, PromotionService, LeaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
