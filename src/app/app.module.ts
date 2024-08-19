import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './modules/panel/component/modules/panel/menu/menu.component';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { provideHttpClient, withFetch } from '@angular/common/http';

import { VentasComponent } from './modules/ventas/ventas.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { SearchComponent } from './shared/components/component-panel/search/search.component';
import { ModalInsertComponent } from './shared/components/component-panel/modal-insert/modal-insert.component';
import { ButtonsComponent } from './shared/components/component-panel/buttons/buttons.component';
import { ModalUpdateComponent } from './shared/components/component-panel/modal-update/modal-update.component';
import { TableComponent } from './shared/components/component-panel/table/table.component';
import { FormsModule } from '@angular/forms';
import { NotfoundpageComponent } from './shared/components/notfoundpage/notfoundpage.component';
import { ClientesComponent } from './modules/clientes/clientes.component';
import { ButtonModule } from 'primeng/button';
import { TreeTableModule } from 'primeng/treetable';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableModule } from 'primeng/table';
import { DoublePipe } from './shared/components/component-panel/pipes/toUpperCaseandOrder.pipe';
@NgModule({
    declarations: [
        AppComponent,
        MenuComponent,
        SearchComponent,
        ModalInsertComponent,
        ButtonsComponent,
        ModalUpdateComponent,
        TableComponent,
        VentasComponent,
        NavbarComponent,
        NotfoundpageComponent,
        ClientesComponent,
        DoublePipe,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        TreeTableModule,
        MatIconModule,
        FormsModule,
        ButtonModule,
        TableModule,
        BrowserAnimationsModule
    ],
    providers: [
        provideClientHydration(),
        provideAnimationsAsync(),
        provideHttpClient(withFetch()) // Configura HttpClient para usar fetch

    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
