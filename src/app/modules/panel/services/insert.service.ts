import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pharmacy } from '../../../shared/models/pharmacy.models';
import { Observable } from 'rxjs';
import { Pokemons } from '../../../shared/models/pokemons.model';

@Injectable({
    providedIn: 'root'
})
export class InsertService {
    private apiUrl = 'https://pokeapi.co/api/v2/ability'
    constructor(private http: HttpClient) { }


    insertData(data: Pharmacy): Observable<object> {
        return this.http.post(this.apiUrl, data);
    }

    getPokemons(): Observable<Pokemons[]>{
        return this.http.get<Pokemons[]>(this.apiUrl);
    }
}
