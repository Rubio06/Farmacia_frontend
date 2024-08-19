import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-buttons',
    templateUrl: './buttons.component.html',
    styleUrl: './buttons.component.css'
})
export class ButtonsComponent {
    @Input() buttonClass!: string;
    @Input() buttonText!: string;

    @Input() target!: string;


    @Output() buttonCLick = new EventEmitter();

    sendClick = () => this.buttonCLick.emit();

}
