import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'app-ventas',
    templateUrl: './ventas.component.html',
    styleUrl: './ventas.component.css'
})
export class VentasComponent implements OnInit {

    product!: string;

    constructor(private readonly router: ActivatedRoute) { }

    ngOnInit(): void {
        this.router.queryParams.subscribe((params: Params) => {
            this.product = params['product']
        });
    }

}
