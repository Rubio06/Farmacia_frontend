import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { Observable, of } from "rxjs";

const laboratory: string[] = ['Medifarma', 'Teva S.A.C', 'KimberlyClark', 'Portugal S.A.C'];

@Injectable({ providedIn: 'root' })

export class SelectLaboratory implements Resolve<string[]> {
    resolve(): Observable<string[]> {
        return of(laboratory);
    }
}