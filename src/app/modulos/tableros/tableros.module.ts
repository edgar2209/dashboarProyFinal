import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablerosComponent } from './tableros.component';
import { BarchartComponent } from './barchart/barchart.component';
import { PiechartComponent } from './piechart/piechart.component';
import { TablerosRoutingModule } from './tableros.routes';


@NgModule({
  declarations: [TablerosComponent, BarchartComponent, PiechartComponent],
  imports: [
    CommonModule,
    TablerosRoutingModule
  ]
})
export class TablerosModule { }
