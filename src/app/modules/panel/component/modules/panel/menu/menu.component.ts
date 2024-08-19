import { Component, OnInit } from '@angular/core';
import { InsertService } from '../../../../services/insert.service';
import { Pharmacy } from '../../../../../../shared/models/pharmacy.models';
import { response } from 'express';
import { Console, error } from 'console';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrl: './menu.component.css'
})
export class MenuComponent {
    buttonClassInsert: string = 'btn-warning';
    buttonClassUpdate: string = 'btn-success';
    buttonInsert: string = "Enviar datos";
    buttonUpdate: string = "Actualizar datos";

    pharmacyData: Pharmacy = {product: '', activePrinciple: '', category: '', laboratory: ''}; // Aquí defines el objeto Pharmacy

    dataSelect: Pharmacy[] = [];


    constructor(
        private insertServices:InsertService,

    ) {}

    receiveClick = (button: string) => {}

    updateData(event: object): void{
        console.log(event);
    }

    insertData(pharmacyData: Pharmacy): void{
        console.log(pharmacyData)
        this.insertServices.insertData(pharmacyData).subscribe(response => {
            console.log("Enviado", response);
        }, error => {
            console.log("Existe un error", error);
        })
    }







    

}
