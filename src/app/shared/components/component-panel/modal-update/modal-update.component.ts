import { Component, EventEmitter, Output } from '@angular/core';
import { Pharmacy } from '../../../models/pharmacy.models';

@Component({
    selector: 'app-modal-update',
    templateUrl: './modal-update.component.html',
    styleUrl: './modal-update.component.css'
})
export class ModalUpdateComponent {

    model: Pharmacy = {
        product: '',
        activePrinciple: '',
        category: '',
        laboratory: ''
    }

    @Output() dataUpdate: EventEmitter<Pharmacy> = new EventEmitter<Pharmacy>()

    onSubmit(): void {
        // console.log(this.model)
        this.dataUpdate.emit(this.model);
    }
}
