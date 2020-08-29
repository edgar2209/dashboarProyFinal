import { Component, OnInit } from '@angular/core';
import { VentasService } from '../../servicios/ventas.service';

@Component({
  selector: 'app-tableros',
  templateUrl: './tableros.component.html',
  styleUrls: ['./tableros.component.scss']
})
export class TablerosComponent implements OnInit {

  constructor(private ventasService: VentasService ) { 
    
  }

  ngOnInit(): void {
  }

}
