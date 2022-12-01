import { Component, Input, OnInit } from '@angular/core';
import { Materia } from '../../interfaces/materia.interface';

@Component({
  selector: 'app-global-table',
  templateUrl: './global-table.component.html',
  styleUrls: ['./global-table.component.css']
})
export class GlobalTableComponent implements OnInit {

  @Input() header: string[] = [];
  @Input() tableBody: Materia[] = [
    { materia: '123', nota: 200, numberOfCredits: 2,total: 1 }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  delete( indice: number ) {
    this.tableBody.splice(indice, 1);
  }

}
