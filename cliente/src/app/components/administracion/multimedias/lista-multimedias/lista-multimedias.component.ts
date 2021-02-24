import { Component, OnInit } from '@angular/core';
import { MultimediasService } from "../../../../services/multimedias.service";

declare var $: any;

@Component({
  selector: 'app-lista-multimedias',
  templateUrl: './lista-multimedias.component.html',
  styleUrls: ['./lista-multimedias.component.scss']
})
export class ListaMultimediasComponent implements OnInit {

  multimedias: any = []
  multimedia: any = {}
  conmutadorModelAgregarMultimedia = true
  accionModelAgregarMultimedia = 1
  constructor(private multimediasService: MultimediasService) { }

  ngOnInit(): void {
    this.inicializacion()
  }

  inicializacion() {
    let params = { }
    this.multimediasService.getMultimediasFiltro(params).subscribe((data: any) => {
      if (data.success) {
        this.multimedias = [...data.multimedias]
      } else {
        console.log(data.mensaje)
      }
    })
  }
  eventoClickEditarMultimedia(evento: any, row: any) {
    this.conmutadorModelAgregarMultimedia = !this.conmutadorModelAgregarMultimedia
    this.accionModelAgregarMultimedia = 0
    this.multimedia = row
      $('#modalAgregarMultimedia').click();
  }

  eventoClickDesactivarMultimedia(evento: any, row: any) {
    let params = { _id: row._id, f_activo: !row.f_activo} 
    this.multimediasService.actualizarMultimedia(params).subscribe((datos: any) => {
      location.reload()
    })
  }

  eventoClickNuevaMultimedia() {
    this.conmutadorModelAgregarMultimedia = !this.conmutadorModelAgregarMultimedia
    this.accionModelAgregarMultimedia = 1
    this.multimedia = {}
    $('#modalAgregarMultimedia').click();
  }
  agregarMultimediaNueva(datos: any) {
    $('#cerrarModelMultimedia').click();
    location.reload()
  }
  modalCerrar(id: string) {
    $(id).click();
  }
}
