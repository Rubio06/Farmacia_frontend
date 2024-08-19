import { InsertService } from './../../../../modules/panel/services/insert.service';
import { Component, OnInit } from '@angular/core';
import { Pharmacy } from '../../../models/pharmacy.models';
import { Pokemons } from '../../../models/pokemons.model';


@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrl: './table.component.css'
})
export class TableComponent implements OnInit {
    // productos: Pharmacy[] = 
    // [
    //   { product: 'paracetamol', activePrinciple: 'contraint', category: 'tabletas', laboratory: 'Sherfarma' },
    //   { product: 'gabapentina', activePrinciple: 'contraint', category: 'tabletas', laboratory: 'farmaindustria' },
    //   { product: 'carbamazepina', activePrinciple: 'contraint', category: 'tabletas', laboratory: 'teva s.a.c' },

    // ];

    dataPokemons: Pokemons[] = [];
    errorMessage = ''
    constructor(private readonly insertServices: InsertService) { }

    ngOnInit(): void {
        this.loadPokemon();
    }

    loadPokemon(): void {
        this.insertServices.getPokemons().subscribe({
            next: (data: any) => {
                this.dataPokemons = data.results; // Asegúrate de que `data` es un arreglo
                console.log(this.dataPokemons); // Verifica los datos en la consola
            },
            error: (error) => {
                this.errorMessage = error
            }
        });
    }
}