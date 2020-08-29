import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-selects',
  templateUrl: './selects.component.html',
  styles: [
  ]
})
export class SelectsComponent implements OnInit {

  @Input() years$: Observable<any>;
  @Input() yearSelected: any = [];
  @Input() months$: Observable<any>;
  @Input() monthSelected: any = [];
  @Input() acumuladoVentas: Number = 0;
  @Input() ventasFiltradas$: Observable<any>;
  @Output() onYearChangeRedirect: EventEmitter<Event> = new EventEmitter();
  @Output() onMesChangeRedirect: EventEmitter<Event> = new EventEmitter();
  

  constructor() { }

  ngOnInit(): void {
  }

  year_OnChange($event)
  {
    this.onYearChangeRedirect.emit($event);
  }

  mes_OnChange($event)
  {
    this.onMesChangeRedirect.emit($event);
  }

  dimesnsion_OnClear($event){
    
  }

}
