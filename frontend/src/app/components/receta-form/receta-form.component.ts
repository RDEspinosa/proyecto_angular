import { Component, OnInit } from '@angular/core';
import { RecetaService } from '../../services/receta.service';
import { NgForm } from '@angular/forms';
import { Receta } from 'src/app/model/receta';

@Component({
  selector: 'app-receta-form',
  templateUrl: './receta-form.component.html',
  styleUrls: ['./receta-form.component.css']
})
export class RecetaFormComponent implements OnInit {

  constructor(public recetaService: RecetaService) { }

  ngOnInit(): void {
    this.getReceta();
  }

  getReceta() {
    this.recetaService.getRecetas()
      .subscribe(
        res=> this.recetaService.recetas = res,
        err => console.log(err)
      )
  }

  agregarReceta(form?: NgForm){
    if (form?.value._id) {
        this.recetaService.putReceta(form.value)
          .subscribe(
            (res) => this.getReceta(),
            (err) => console.log(err)
          )
    } else {
      this.recetaService.createReceta(form?.value)
        .subscribe(
          (res) => {
            form?.reset();
            this.getReceta();
          }
        );
    }
  }

  eliminarReceta(id: string, form: NgForm){
    if (confirm('¿Desea eliminar la receta?')) {
      this.recetaService.deleteReceta(id)
        .subscribe(
          res => this.getReceta(),
          err => console.log(err)
        )
    }
  }

  editarReceta(receta: Receta){
    this.recetaService.seleccionarReceta = receta;
  }

}
