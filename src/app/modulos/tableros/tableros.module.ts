import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablerosComponent } from './tableros.component';
import { TablerosRoutingModule } from './tableros.routes';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VentasComponent } from './ventas/ventas.component';


@NgModule({
  declarations: [TablerosComponent, DashboardComponent, VentasComponent],
  imports: [
    CommonModule,
    TablerosRoutingModule
  ]
})
export class TablerosModule { }
