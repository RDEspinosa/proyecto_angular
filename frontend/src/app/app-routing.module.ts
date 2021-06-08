import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RecetaFormComponent } from './components/receta-form/receta-form.component';
import { RecetaListComponent } from './components/receta-list/receta-list.component';
import { RecetaPreviewComponent } from './components/receta-preview/receta-preview.component';
import { UsuarioLoginComponent } from './components/usuario-login/usuario-login.component';
import { UsuarioRegisterComponent } from './components/usuario-register/usuario-register.component';

import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: 'receta/nueva',
    component: RecetaFormComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'receta/lista',
    component: RecetaListComponent
  },
  {
    path: 'receta/:id',
    component: RecetaPreviewComponent
  },
  {
    path: 'usuario/login',
    component: UsuarioLoginComponent
  },
  {
    path: 'usuario/registro',
    component: UsuarioRegisterComponent
  },
  {
    path: '',
    redirectTo: 'receta/lista',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
