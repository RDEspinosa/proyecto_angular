import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecetaListComponent } from './components/receta-list/receta-list.component';
import { RecetaFormComponent } from './components/receta-form/receta-form.component';
import { RecetaPreviewComponent } from './components/receta-preview/receta-preview.component';
import { UsuarioRegisterComponent } from './components/usuario-register/usuario-register.component';
import { UsuarioLoginComponent } from './components/usuario-login/usuario-login.component';

import { AuthGuard } from './auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    RecetaListComponent,
    RecetaFormComponent,
    RecetaPreviewComponent,
    UsuarioRegisterComponent,
    UsuarioLoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
