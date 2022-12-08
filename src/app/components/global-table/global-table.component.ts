import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import Swal from 'sweetalert2';
import { Materia } from '../../interfaces/materia.interface';

@Component({
  selector: 'app-global-table',
  templateUrl: './global-table.component.html',
  styleUrls: ['./global-table.component.css']
})
export class GlobalTableComponent implements OnInit {

  @Output() delete = new EventEmitter<any>();
  @Output() edit = new EventEmitter<any>();

  @Input() header: string[] = [];
  @Input() tableBody: Materia[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  onDelete( indice: number ) {

    Swal.fire({
      title: '¿Estás seguro que desea eliminar?',
      text: "",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Eliminado!',
          'La materia ha sido eliminada con exito',
          'success'
          )
          this.tableBody.splice(indice, 1);
          this.delete.emit(indice);
      }
    });
  }

  onEditar( indice: number ) {
    this.edit.emit(indice);
  };


  

}
