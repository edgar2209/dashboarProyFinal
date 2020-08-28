import  { Routes, RouterModule} from  '@angular/router';
import  { TablerosComponent} from  './tableros.component';
import  { DashboardComponent} from  './dashboard/dashboard.component';
import  { VentasComponent} from  './ventas/ventas.component';



const routes: Routes = [ 
    {path: '',component: TablerosComponent},
    {path: 'dashboard',component: DashboardComponent},
    {path: 'ventas',component: VentasComponent}
]

export const TablerosRoutingModule = RouterModule.forChild(routes);