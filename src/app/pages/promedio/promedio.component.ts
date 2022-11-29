import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promedio',
  templateUrl: './promedio.component.html',
  styleUrls: ['./promedio.component.css']
})
export class PromedioComponent implements OnInit{

  public items: any[] = [];
  public promedio: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.items = [];
  }

  submit() {
    this.promedio = true;
  }

}
