import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Pharmacy } from '../../../models/pharmacy.models';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-modal-insert',
    templateUrl: './modal-insert.component.html',
    styleUrl: './modal-insert.component.css'
})
export class ModalInsertComponent implements OnInit {
    model: Pharmacy = {
        product: '',
        activePrinciple: '',
        category: '',
        laboratory: ''
    }

    selectCategory: string[] = [];
    selectLaboratory: string[] = [];

    constructor(private readonly route: ActivatedRoute) { }

    ngOnInit(): void {
        this.selectCategory = this.route.snapshot.data['category'];
        this.selectLaboratory = this.route.snapshot.data['laboratory'];
    }
    
    @Output() dataInsert: EventEmitter<Pharmacy> = new EventEmitter<Pharmacy>()

    onSubmitInsert = () => this.dataInsert.emit(this.model);

    // onSubmitInsert(): void {
    //     this.dataInsert.emit(this.model);
    // }
}
