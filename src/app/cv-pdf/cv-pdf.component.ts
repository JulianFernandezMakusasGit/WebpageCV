import { Component } from '@angular/core';
import { TopbarComponent } from '../topbar/topbar.component';

@Component({
  selector: 'app-cv-pdf',
  standalone: true,
  imports: [TopbarComponent],
  templateUrl: './cv-pdf.component.html',
  styleUrl: './cv-pdf.component.css'
})
export class CvPdfComponent {
  pdfSrc = "../../assets/CurriculumVitae.pdf";
  imgCv = "../../assets/CurriculumVitae.jpg";
}
