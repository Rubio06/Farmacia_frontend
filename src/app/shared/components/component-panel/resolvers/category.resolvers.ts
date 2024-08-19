import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { Observable, of } from "rxjs";

const category: string[] = ['Capsulas', 'Tabletas', 'Suspensión', 'Emulsión', 'Perfumeria', 'Jarabe', 'Injectable'] 

@Injectable({ providedIn: 'root' })

export class SelectCategory implements Resolve<string[]> {
    resolve(): Observable<string[]>{
        return of(category)
    }

}