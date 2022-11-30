import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-promedio',
  templateUrl: './promedio.component.html',
  styleUrls: ['./promedio.component.css']
})
export class PromedioComponent implements OnInit{

  public items: any[] = [];
  public promedio: boolean = false;
  public myForm!: FormGroup;

  constructor( private formBuilder: FormBuilder ) {}

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      
    });
  }

  addMateria() {
    console.log('hola');
  }

  submit() {
    this.promedio = true;
  }

}
