import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})

export class VentasService {

  // Now we need to identify the location of our web server.
  private URL_VENTAS = 'https://localhost:44368/api/Northwind/v1/AcumuladoVentas';
  private URL_YEARS = 'https://localhost:44368/api/Northwind/v1/GetYears';
  private URL_MONTHS = 'https://localhost:44368/api/Northwind/v1/GetMonths';
  private URL_FILTROs = 'https://localhost:44368/api/Northwind/v1/VentasFiltro';
  private URL_FILTRO = 'https://localhost:44368/api/Northwind/v1/VentasFiltro/';


  constructor(private http: HttpClient) { 

  }

  getVentas(){
    return this.http.get(this.URL_VENTAS);
  }

  getYears(){
    return this.http.get(this.URL_YEARS);
  }
  
  getMonths(){
    return this.http.get(this.URL_MONTHS);
  }

  getVentasFiltro(anio: string, mes: string){
    return this.http.get(this.URL_FILTRO+anio+"/"+mes);
  }


}
