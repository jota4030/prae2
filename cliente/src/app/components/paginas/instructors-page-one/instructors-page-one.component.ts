import { Component, OnInit } from '@angular/core';
import { MultimediasService } from '../../../services/multimedias.service';
import { TiposMultimedias } from '../../../Enums/TiposMultimedias';
declare var $: any;

@Component({
  selector: 'app-instructors-page-one',
  templateUrl: './instructors-page-one.component.html',
  styleUrls: ['./instructors-page-one.component.scss']
})
export class InstructorsPageOneComponent implements OnInit {
  multimedias: any = []
  paginaSlug = "instructores";
  TiposMultimedias = TiposMultimedias
  constructor(private multimediasService: MultimediasService) { }

  ngOnInit(): void {
    this.multimediasService.getMultimediasByPagina(this.paginaSlug).subscribe((datos: any) => {
      this.multimedias = datos.multimedias
    })
  }
  
}
