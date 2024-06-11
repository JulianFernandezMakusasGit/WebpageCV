import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { HttpClientModule, HttpErrorResponse, HttpEvent, HttpEventType } from '@angular/common/http';
import { FileService } from './file.service';
import { error } from 'console';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InicioComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PaginaCV';
  filenames: string[] = [];
  fileStatus = {status: '', requestType: '', percent: 0};

  constructor(private fileService: FileService) {}

  //Funcion para subir archivos al blog
  onUploadBlog(files: File[]): void{
    const formData = new FormData();
    for (const file of files) { formData.append('files', file, file.name); }
    this.fileService.uploadBlog(formData).subscribe(
      event => {
        console.log(event);
        this.reportProgress(event),
        (error: HttpErrorResponse) => {
          console.log(error);
        }
      }
    );
  }

  //Funcion para subir archivos al blog
  onUploadPortfolio(files: File[]): void{
    const formData = new FormData();
    for (const file of files) { formData.append('files', file, file.name); }
    this.fileService.uploadPortfolio(formData).subscribe(
      event => {
        console.log(event);
        this.reportProgress(event),
        (error: HttpErrorResponse) => {
          console.log(error);
        }
      }
    );
  }

  //Porcentaje
  private reportProgress(event: HttpEvent<string[]>): void {
    switch(event.type) {
      case HttpEventType.UploadProgress:
        this.updateStatus(event.loaded, event.total!, 'Subiendo');
        break;
      case HttpEventType.ResponseHeader:
        console.log('header response: ', event);
        break;
      case HttpEventType.Response:
        if(event.body instanceof Array) {
          for(const filename of event.body) {
            this.filenames.unshift(filename);
          }
        }
        break;
    }
  }
  private updateStatus(loaded: number, total: number, requestType: string) {
    this.fileStatus.status = 'Progress';
    this.fileStatus.requestType = requestType;
    this.fileStatus.percent = Math.round(100* loaded / total);
  }
}
