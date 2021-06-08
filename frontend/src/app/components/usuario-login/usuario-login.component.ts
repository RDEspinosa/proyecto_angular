import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario-login',
  templateUrl: './usuario-login.component.html',
  styleUrls: ['./usuario-login.component.css']
})
export class UsuarioLoginComponent implements OnInit {

  usuario = {
    correo: '',
    password: ''
  }

  constructor(private authservice: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  login(){
    this.authservice.login(this.usuario)
      .subscribe(
        res => {
          console.log(res);
          localStorage.setItem('token', res.token);
          this.router.navigate(['/receta/nueva']);
        },
        err => {
          console.log(err);
        }
      )
  }

}
