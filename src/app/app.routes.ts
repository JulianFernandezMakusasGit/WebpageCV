import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AprendizajeComponent } from './aprendizaje/aprendizaje.component';
import { CvPdfComponent } from './cv-pdf/cv-pdf.component';
import { InicioComponent } from './inicio/inicio.component';
import { PortafolioComponent } from './portafolio/portafolio.component';

export const routes: Routes = [
    {path: 'inicio', component: InicioComponent},
    {path: 'cv', component: CvPdfComponent},
    {path: 'portafolio', component: PortafolioComponent},
    {path: 'blog', component: AprendizajeComponent},
    {path: '**', pathMatch:'full', redirectTo: 'inicio'},
    {path: '', pathMatch:'full', redirectTo: 'inicio'}
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }