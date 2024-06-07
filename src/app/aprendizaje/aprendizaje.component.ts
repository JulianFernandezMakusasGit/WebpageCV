import { Component } from '@angular/core';
import { TopbarComponent } from '../topbar/topbar.component';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-aprendizaje',
  standalone: true,
  imports: [TopbarComponent, MatCardModule],
  templateUrl: './aprendizaje.component.html',
  styleUrl: './aprendizaje.component.css'
})
export class AprendizajeComponent {

  publicaciones = [
    {nombre: "Nombre de prueba", resumen: "Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum ", src: ""},
    {nombre: "Nombre de prueba", resumen: "Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum ", src: ""},
    {nombre: "Nombre de prueba", resumen: "Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum ", src: ""},
    {nombre: "Nombre de prueba", resumen: "Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum ", src: ""}
  ]
}
