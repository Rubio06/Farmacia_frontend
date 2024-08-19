import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './modules/panel/component/modules/panel/menu/menu.component';
import { VentasComponent } from './modules/ventas/ventas.component';
import { NotfoundpageComponent } from './shared/components/notfoundpage/notfoundpage.component';
import { ClientesComponent } from './modules/clientes/clientes.component';
import { PermissionsGuards } from './shared/components/component-panel/guards/permissions.guard';
import { SelectCategory } from './shared/components/component-panel/resolvers/category.resolvers';
import { ModalInsertComponent } from './shared/components/component-panel/modal-insert/modal-insert.component';
import { SelectLaboratory } from './shared/components/component-panel/resolvers/laboratory.resolvers';

const routes: Routes = [
    { path: '', redirectTo: 'panel', pathMatch: 'full' },
    { path: 'panel', component: MenuComponent, resolve: {category: SelectCategory, laboratory: SelectLaboratory} },
    { path: 'ventas', component: VentasComponent, canActivate: [PermissionsGuards] },
    { path: 'clientes/:id', component: ClientesComponent },
    { path: '**', component: NotfoundpageComponent },
    {
        path: 'parent',
        component: ModalInsertComponent,
        resolve: {
          category: SelectCategory,
          laboratory: SelectLaboratory
        }
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
