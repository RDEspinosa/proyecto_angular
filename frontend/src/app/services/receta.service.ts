import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Receta } from '../model/receta';

@Injectable({
  providedIn: 'root'
})
export class RecetaService {

  URL = 'http://localhost:3000/api/receta'

  seleccionarReceta: Receta = {
    _id: '',
    titulo: '',
    descripcion: '',
    imagenes: '',
    preparacion: '',
    ingredientes: '',
    notas: ''
  };
  recetas!: Receta[];

  constructor(private http: HttpClient, private router: Router) { }

  getRecetas(){
    return this.http.get<Receta[]>(this.URL);
  }

  createReceta(receta: Receta){
    return this.http.post(this.URL, receta);
  }

  putReceta(receta: Receta){
    return this.http.put(`${this.URL}/${receta._id}`, receta);
  }

  deleteReceta(_id: string){
    return this.http.delete(this.URL + `/${_id}`);
  }
}
