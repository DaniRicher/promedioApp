import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalTableComponent } from './global-table/global-table.component';



@NgModule({
  declarations: [
    GlobalTableComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GlobalTableComponent
  ]
})
export class ComponentsModule { }
