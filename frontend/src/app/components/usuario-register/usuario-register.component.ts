import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario-register',
  templateUrl: './usuario-register.component.html',
  styleUrls: ['./usuario-register.component.css']
})
export class UsuarioRegisterComponent implements OnInit {

  usuario = {
    nombre: '',
    correo: '',
    password: ''
  }

  constructor(private authservice: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  register(){
    this.authservice.register(this.usuario)
      .subscribe(
        res => {
          console.log(res)
          localStorage.setItem('token', res.token);
          this.router.navigate(['/receta/nueva']);
        },
        err => {
          console.log(err)
        }
      )
  }

}
