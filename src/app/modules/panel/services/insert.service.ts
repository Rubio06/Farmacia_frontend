import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pharmacy } from '../../../shared/models/pharmacy.models';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class InsertService {
    private apiUrl = 'http://localhost:3000/pharmacy'
    constructor(private http: HttpClient) { }


    insertData(data: Pharmacy): Observable<object> {
        return this.http.post(this.apiUrl, data);
    }
}
