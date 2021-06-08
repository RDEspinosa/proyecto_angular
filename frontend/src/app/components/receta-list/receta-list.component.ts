import { Component, OnInit } from '@angular/core';
import { RecetaService } from '../../services/receta.service';

@Component({
  selector: 'app-receta-list',
  templateUrl: './receta-list.component.html',
  styleUrls: ['./receta-list.component.css']
})
export class RecetaListComponent implements OnInit {


  constructor(public recetaService: RecetaService) { }

  ngOnInit(): void {
    this.recetaService.getRecetas()
      .subscribe(
        res=> this.recetaService.recetas = res,
        err => console.log(err)
      )
  }

  getRecetas(){
  }

}
