import { Component, OnInit } from '@angular/core';
import { MultimediasService } from '../../../services/multimedias.service';
declare var $: any;

@Component({
  selector: 'app-instructors-page-one',
  templateUrl: './instructors-page-one.component.html',
  styleUrls: ['./instructors-page-one.component.scss']
})
export class InstructorsPageOneComponent implements OnInit {
  multimedias: any = []
  paginaSlug = "instructores";
  constructor(private multimediasService: MultimediasService) { }

  ngOnInit(): void {
    this.multimediasService.getMultimediasByPagina(this.paginaSlug).subscribe((datos: any) => {
      this.multimedias = datos.multimedias
      this.setMultimediasPagina();
    })
  }

  setMultimediasPagina() {
    this.multimedias.forEach((multimedia: any) => {
      $(`#${multimedia.f_id_elemento}`).attr('src', multimedia.f_url)
      if (multimedia.f_tipo_multimedia == 2) {
        $(`#${multimedia.f_id_elemento}`).parent('video')[0].load();
      }
      this.eventosMultimedias(multimedia);
    });
  }

  eventosMultimedias(multimedia: any) {
    if (multimedia.f_tipo_multimedia == 2) {
      $(`#${multimedia.f_id_elemento}`).parent('video').on('playing', (e: any) => {
        this.multimediasService.contarConsumoMultimedia(multimedia.f_pagina, multimedia.f_id_elemento).subscribe((datos: any) => {
        })
      })
    }

    if (multimedia.f_tipo_multimedia == 4) {
      $(`#${multimedia.f_id_elemento}`).contents().on("mousedown, mouseup, click", function () {
      });
    }
  }
}
