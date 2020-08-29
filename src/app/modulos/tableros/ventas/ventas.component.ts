import { Component, OnInit } from '@angular/core';
import { VentasService } from '../../../servicios/ventas.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.scss']
})
export class VentasComponent implements OnInit {

  acumuladoVentas: Number = 0;
  //years: any = [];
  

  constructor(private ventasServicio: VentasService) { 
    this.ventasServicio.getVentas().subscribe((data: any) => {
      this.acumuladoVentas = data;
      console.log(data);
    });

    // this.ventasServicio.getYears().subscribe((data: any[]) => {
    //   this.years = data;
    //   console.log(data);
    // });
    
    this.get_Years();

    this.get_Months();

    //this.getVentasFiltro();
  }

  years$: Observable<any>;
  months$: Observable<any>;
  yearSelected: any = [];
  monthSelected: any = [];
  anioSeleccionado: string[];
  anios: string = "";
  mesSeleccionado: string;
  ventasFiltradas$: Observable<any>;

  ngOnInit(): void {
    
  }
 
  year_OnChange($event)
  {
    this.anioSeleccionado = $event;

    this.anios = this.anioSeleccionado.map((item:any) => {
      return item.valor;
    }).join(',');

    this.ventasFiltradas$ = this.ventasServicio.getVentasFiltro(this.anios, this.mesSeleccionado);
  }

  mes_OnChange($event)
  {
    this.anios = this.anioSeleccionado.map((item:any) => {
      return item.valor;
    }).join(',');

    this.mesSeleccionado = $event.valor;
    this.ventasFiltradas$ = this.ventasServicio.getVentasFiltro(this.anios, this.mesSeleccionado);
  }

  dimesnsion_OnClear($event){

  }

  get_Years(){
    this.years$ = this.ventasServicio.getYears();
  }

  get_Months(){
    this.months$ = this.ventasServicio.getMonths();
  }

  // getVentasFiltro(){
  //   this.months$ = this.ventasServicio.getVentasFiltro(this.anioSeleccionado, "");
  // }

}
