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
  public cualitativa: boolean = false;

  public calculate: number = 0;
  public totalSuma: number = 0
  public totalCreditos: number = 0

  constructor( private formBuilder: FormBuilder ) {}

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      materia: ['', [ Validators.required ]],
      nota: ['', [ Validators.required ]],
      numberOfCredits: ['', [ Validators.required ]],
      total: [ '',  [] ],
    });
  }

  campoEsValido( campo:string ){

    return this.myForm.controls[campo].errors
           && this.myForm.controls[campo].touched
    
  }

  addMateria() {

    if( !this.myForm.invalid ) {

      this.getTotal();
      this.materias.push(this.myForm.value);
      this.myForm.reset();
      this.calcularPromedio();

    }
  }

  getTotal() {

    this.total = 0;
    const nota = this.myForm.get('nota')?.value;
    const cantidadDeCreditos = this.myForm.get('numberOfCredits')?.value;
    this.total = nota * cantidadDeCreditos;
    this.myForm.get('total')?.setValue(this.total);

  }

  calcularPromedio() {

    this.promedio = true;
    this.totalSuma = 0;
    this.totalCreditos = 0;
    
    this.materias.forEach( (materia: Materia) => {

      const { total, numberOfCredits  } = materia;
      this.totalSuma += total;
      this.totalCreditos += numberOfCredits;

    });
    this.calculate = (this.totalSuma/this.totalCreditos);
    this.myForm.get('nota')?.setValue('');


  }

  guardar() {
    console.log('guardando...');
  }

  delete() {

    this.calcularPromedio();

  }

  editar( indice: any ) {

    const materiaEdit = this.materias[indice];

    console.log(materiaEdit);

  }

  esCualitativa() {

    if ( this.cualitativa ) {
      return this.cualitativa = false;
    }
    this.myForm.get('nota')?.setValue('');
    return this.cualitativa = true;
  }

}
