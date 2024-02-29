import { Component, input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CuadroComponent } from './componentes/cuadro/cuadro.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CuadroComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tokenLogin';
}
