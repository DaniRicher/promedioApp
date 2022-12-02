import { Component, Input, OnInit } from '@angular/core';
import { Materia } from '../../interfaces/materia.interface';

@Component({
  selector: 'app-global-table',
  templateUrl: './global-table.component.html',
  styleUrls: ['./global-table.component.css']
})
export class GlobalTableComponent implements OnInit {

  @Input() header: string[] = [];
  @Input() tableBody: Materia[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  delete( indice: number ) {
    this.tableBody.splice(indice, 1);
    // this.actualizarPromedio();
  }

  @Input() editar( indice: number ) {};
  // @Input() actualizarPromedio() {};


  

}
