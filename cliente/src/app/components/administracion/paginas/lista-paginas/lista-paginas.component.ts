import { Component, OnInit } from '@angular/core';
import { PaginasService } from "../../../../services/paginas.service";

declare var $: any;

@Component({
  selector: 'app-lista-paginas',
  templateUrl: './lista-paginas.component.html',
  styleUrls: ['./lista-paginas.component.scss']
})
export class ListaPaginasComponent implements OnInit {

  paginas: any = []
  pagina: any = {}
  conmutadorModelAgregarPagina = true
  accionModelAgregarPagina = 1
  constructor(private paginasService: PaginasService) { }

  ngOnInit(): void {
    this.inicializacion()
  }

  inicializacion() {
    let params = { }
    this.paginasService.getPaginasFiltro(params).subscribe((data: any) => {
      if (data.success) {
        this.paginas = [...data.paginas]
      } else {
        console.log(data.mensaje)
      }
    })
  }
  eventoClickEditarPagina(evento: any, row: any) {
    this.conmutadorModelAgregarPagina = !this.conmutadorModelAgregarPagina
    this.accionModelAgregarPagina = 0
    this.pagina = row
      $('#modalAgregarPagina').click();
  }

  eventoClickDesactivarPagina(evento: any, row: any) {
    let params = { _id: row._id, f_activo: !row.f_activo} 
    this.paginasService.actualizarPagina(params).subscribe((datos: any) => {
      location.reload()
    })
  }

  eventoClickNuevaPagina() {
    this.conmutadorModelAgregarPagina = !this.conmutadorModelAgregarPagina
    this.accionModelAgregarPagina = 1
    this.pagina = {}
    $('#modalAgregarPagina').click();
  }
  agregarPaginaNueva(datos: any) {
    $('#cerrarModelPagina').click();
    location.reload()
  }
  modalCerrar(id: string) {
    $(id).click();
  }
}
