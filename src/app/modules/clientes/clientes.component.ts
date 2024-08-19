import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'app-clientes',
    templateUrl: './clientes.component.html',
    styleUrl: './clientes.component.css'
})
export class ClientesComponent implements OnInit {
    id!: string;
    constructor(private readonly route: ActivatedRoute) {}
    ngOnInit(): void {
        this.route.params.subscribe((params: Params) => {
            this.id = params['id'];
        })

    }



}
