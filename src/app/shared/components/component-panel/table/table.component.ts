import { Component } from '@angular/core';
import { Pharmacy } from '../../../models/pharmacy.models';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  productos: Pharmacy[] = 
  [
    { product: 'paracetamol', activePrinciple: 'contraint', category: 'tabletas', laboratory: 'Sherfarma' },
    { product: 'gabapentina', activePrinciple: 'contraint', category: 'tabletas', laboratory: 'farmaindustria' },
    { product: 'carbamazepina', activePrinciple: 'contraint', category: 'tabletas', laboratory: 'teva s.a.c' },

  ];


  

}
