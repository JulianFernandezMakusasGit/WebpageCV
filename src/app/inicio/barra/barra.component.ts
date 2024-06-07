import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-barra',
  standalone: true,
  imports: [MatToolbarModule],
  templateUrl: './barra.component.html',
  styleUrl: './barra.component.css'
})
export class BarraComponent {
  
  constructor(private router: Router) {}
  
  redirectTo(url: string) {
    this.router.navigate([url]);
  }
}
