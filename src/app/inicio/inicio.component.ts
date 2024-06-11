import { Component } from '@angular/core';
import { SobreMiComponent } from './sobre-mi/sobre-mi.component';
import { TopbarComponent } from '../topbar/topbar.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [SobreMiComponent, TopbarComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

}
