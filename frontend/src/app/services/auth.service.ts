import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL = 'http://localhost:3000/api/usuario'

  constructor(private http: HttpClient, private router: Router) { }

  register(usuario: { nombre: string; correo: string; password: string; }){
    return this.http.post<any>(this.URL + '/registro', usuario);
  }

  login(usuario: { correo: string; password: string; }){
    return this.http.post<any>(this.URL + '/ingresar', usuario);
  }

  loggedIn(){
    return !!localStorage.getItem('token');
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/ingresar']);
  }

}
