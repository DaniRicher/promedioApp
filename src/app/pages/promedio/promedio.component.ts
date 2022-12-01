import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Materia } from '../../interfaces/materia.interface';

@Component({
  selector: 'app-promedio',
  templateUrl: './promedio.component.html',
  styleUrls: ['./promedio.component.css']
})
export class PromedioComponent implements OnInit{

  public materias: Materia[] = [];
  public promedio: boolean = false;
  public myForm!: FormGroup;
  public total: number = 0;
  public add: boolean = false;

  constructor( private formBuilder: FormBuilder ) {}

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      materia: ['', [ Validators.required ]],
      nota: ['', [ Validators.required ]],
      numberOfCredits: ['', [ Validators.required ]],
      total: [ '',  [] ],
    });
  }

  addMateria() {

    if( !this.myForm.invalid ) {

      this.add = true;
      this.getTotal();
      this.materias.push(this.myForm.value);
      this.myForm.reset();

    }
  }

  getTotal() {
    this.total = 0;
    const nota = this.myForm.get('nota')?.value;
    const cantidadDeCreditos = this.myForm.get('numberOfCredits')?.value;
    this.total = nota * cantidadDeCreditos;
    this.myForm.get('total')?.setValue(this.total);
  }

  submit() {
    // this.promedio = true;
    this.materias.forEach( data => {
      console.log(data);
    })
  }

}
