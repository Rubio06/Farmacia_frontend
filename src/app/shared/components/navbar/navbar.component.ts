import { Component, OnInit, } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {

    constructor(private readonly router: Router) { }
    
    ngOnInit(): void {

    }
    
    goToSale(): void {
        this.router.navigate(['ventas'], { queryParams: { product: 'DATOSLINEA' } })
    }

    goTonotClients(): void {
        this.router.navigate(['clientes', '2222'])
    }

}
