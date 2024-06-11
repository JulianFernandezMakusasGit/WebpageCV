import { Component } from '@angular/core';
import { TopbarComponent } from '../topbar/topbar.component';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-portafolio',
  standalone: true,
  imports: [TopbarComponent, MatCardModule],
  templateUrl: './portafolio.component.html',
  styleUrl: './portafolio.component.css'
})
export class PortafolioComponent {

  publicaciones = [
    {nombre: "Nombre de prueba", resumen: "Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum ", src: ""},
    {nombre: "Nombre de prueba", resumen: "Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum ", src: ""},
    {nombre: "Nombre de prueba", resumen: "Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum ", src: ""},
    {nombre: "Nombre de prueba", resumen: "Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum ", src: ""},
    {nombre: "Nombre de prueba", resumen: "Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum ", src: ""},
    {nombre: "Nombre de prueba", resumen: "Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum ", src: ""},
    {nombre: "Nombre de prueba", resumen: "Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum ", src: ""},
    {nombre: "Nombre de prueba", resumen: "Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum ", src: ""},
    {nombre: "Nombre de prueba", resumen: "Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum ", src: ""},
    {nombre: "Nombre de prueba", resumen: "Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum ", src: ""},
    {nombre: "Nombre de prueba", resumen: "Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum ", src: ""},
    {nombre: "Nombre de prueba", resumen: "Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum ", src: ""}
  ]
}
