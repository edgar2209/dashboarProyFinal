import  { Routes, RouterModule} from  '@angular/router';
import  { TablerosComponent} from  './tableros.component';
import  { BarchartComponent} from  './barchart/barchart.component';
import  { PiechartComponent} from  './piechart/piechart.component';



const routes: Routes = [ 
    {path: '',component: TablerosComponent},
    {path: 'barchart',component: BarchartComponent},
    {path: 'piechart',component: PiechartComponent}
]

export const TablerosRoutingModule = RouterModule.forChild(routes);