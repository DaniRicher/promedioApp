import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
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
    this.tableBody.splice(indice, 1);
    this.delete.emit(indice);
  }

  onEditar( indice: number ) {
    this.edit.emit(indice);
  };


  

}
