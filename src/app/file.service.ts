import { HttpClient, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  private server = 'http://localhost:8080';

  constructor(public http: HttpClient) { }

  // Definir un metodo para subir archivos blog
  uploadBlog(formData: FormData): Observable<HttpEvent<string[]>> {
    return this.http.post<string[]>(`${this.server}/file/uploadBlog`, formData, {
      reportProgress: true,
      observe: 'events'
    });
  }
  // Definir un metodo para subir archivos tarjeta
  uploadPortfolio(formData: FormData): Observable<HttpEvent<string[]>> {
    return this.http.post<string[]>(`${this.server}/file/uploadPortfolio`, formData, {
      reportProgress: true,
      observe: 'events'
    });
  }
  // Definir un metodo para eliminar archivos

  // Definir un metodo para crear archivos .md

  // Definir un metodo para modificar archivos .md
}
