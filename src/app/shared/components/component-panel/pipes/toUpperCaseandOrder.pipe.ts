import { Pipe, PipeTransform } from "@angular/core";
import { Pharmacy } from "../../../models/pharmacy.models";

@Pipe({
    name: 'toUpperCaseandOrder',
    pure: true
})
// PIPES PUROS: se ejecutan cuando la referencia del dato cambia, es decir, cuando se reemplaza la instancia completa de un objeto o array
// PIES IMPUROS: Sí, eso es correcto. Los pipes impuros en Angular se ejecutan en cada ciclo de detección de cambios, lo que significa 
//que se aplican de manera recurrente durante el proceso de detección de cambios del framework Angular.

export class DoublePipe implements PipeTransform {

    //value: es el valor que se desea transformar

    transform(value: Pharmacy[], ...args: any[]): Pharmacy[] {
        if (!Array.isArray(value)) {
            return value;
        }
        // Capitaliza la primera letra del campo 'product' de cada objeto
        const capitalizedValues = value.map(item => ({
            ...item,
            product: this.capitalizeFirstLetter(item.product),
            laboratory: this.capitalizeFirstLetter(item.laboratory),
            activePrinciple: this.capitalizeFirstLetter(item.activePrinciple),
            category: this.capitalizeFirstLetter(item.category)
        }));
        // Ordena el array según el orden especificado en los argumentos
        const [order = 'asc'] = args;
        return capitalizedValues.sort((a, b) => {
            const compare = a.product.localeCompare(b.product);
            return order === 'asc' ? compare : -compare;
        });
    }

    private capitalizeFirstLetter(text: string): string {
        if (!text) return text;
        // console.log(text)
        return text.charAt(0).toUpperCase() + text.slice(1);
    }


}
