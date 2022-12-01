import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-promedio',
  templateUrl: './promedio.component.html',
  styleUrls: ['./promedio.component.css']
})
export class PromedioComponent implements OnInit{

  public items: any[] = [];
  public promedio: boolean = false;
  public myForm!: FormGroup;
  public add: boolean = false;

  constructor( private formBuilder: FormBuilder ) {}

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      materia: ['', [Validators.required ]],
      nota: ['', [Validators.required ]],
      numberOfCredits: ['', [Validators.required ]],
    });
  }

  addMateria() {
    // this.add = true;
    console.log(this.myForm.value);
    this.myForm.reset();
  }

  submit() {
    this.promedio = true;
  }

}
