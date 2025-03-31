import { NgModule } from '@angular/core'; 
import { RouterModule, Routes } from '@angular/router'; 
import { InicioComponent } from './inicio/inicio.component'; 
import { NosotrosComponent } from './nosotros/nosotros.component'; 
import { ServiciosComponent } from './servicios/servicios.component'; 
import { ContactoComponent } from './contacto/contacto.component'; 
import { ProductosComponent } from './productos/productos.component'; 
 
const routes: Routes = [ 
  { path: '', component: InicioComponent }, 
  { path: 'nosotros', component: NosotrosComponent }, 
  { path: 'servicios', component: ServiciosComponent }, 
  { path: 'contacto', component: ContactoComponent }, 
    { path: 'productos', component: ProductosComponent }, 
]; 
 
@NgModule({ 
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule] 
}) 
export class AppRoutingModule { }