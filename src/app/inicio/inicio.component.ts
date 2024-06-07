import { Component } from '@angular/core';
import { BarraComponent } from './barra/barra.component';
import { SobreMiComponent } from './sobre-mi/sobre-mi.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [BarraComponent, SobreMiComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

}
