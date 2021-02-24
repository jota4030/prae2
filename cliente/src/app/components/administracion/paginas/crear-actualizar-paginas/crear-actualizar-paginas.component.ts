import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, ChangeDetectorRef } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { PaginasService } from '../../../../services/paginas.service'

@Component({
  selector: 'app-crear-actualizar-paginas',
  templateUrl: './crear-actualizar-paginas.component.html',
  styleUrls: ['./crear-actualizar-paginas.component.scss']
})
export class CrearActualizarPaginasComponent implements OnInit {

  paginaForm = new FormGroup({
    f_descripcion: new FormControl('', [Validators.required]),
    f_nota: new FormControl(),
  })

  @Input() public accion = 1; // 1 => Crear, 0 => Actualizar
  @Input() public pagina: any = {};
  @Input() public conmutador = true;
  @Output() evento_aceptar = new EventEmitter();
  @Output() eventos_cancelar = new EventEmitter();

  constructor(private paginasService: PaginasService) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.conmutador && this.accion !== undefined) {
      if (this.accion) {
        this.paginaForm.reset();
        this.borrar()
      } else {
        console.log(changes)
        this.paginaForm.patchValue(this.pagina)
      }
    }
  }
  onFormSubmit(form: any) {
    const callback = (datos: any) => {
      this.evento_aceptar.emit({
        accion: this.accion,
        formulario: form.value,
        pagina: datos.pagina
      })
      this.paginaForm.reset()
      this.borrar()
    }
    if (form.valid) {
      if (this.accion) {
        form.value["f_slug"] = form.value["f_descripcion"].toLowerCase().replace(/\s/g, "_");
        form.value["f_activo"] = true;
        form.value["f_fecha"] = new Date();
        this.paginasService.crearPagina(form.value).subscribe((datos: any) => {
          callback(datos)
        })
      } else {
        form.value["_id"] = this.pagina._id
        this.paginasService.actualizarPagina(form.value).subscribe((datos: any) => {
          callback(datos)
        })
      }
    } else {
      console.log("Faltan Parametros")
    }
  }
  cancelar() { }
  borrar() {
    this.pagina = {};
    this.accion = 1;
  }
}
