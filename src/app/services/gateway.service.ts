import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Gateway } from '../models/gateway.model';

@Injectable({ providedIn: 'root' })
export class GatewayService {
    constructor(private http: HttpClient) { }

    getAllGateways() {
        return this.http.get<Gateway[]>(`${environment.apiUrl}gateways/`);
    }

    getSpecificGateway(id: string) {
        return this.http.get<Gateway>(`${environment.apiUrl}gateways/${id}`);
    }

    createNewGateway() {
        return this.http.post<Gateway>(`${environment.apiUrl}gateways/`, {});
    }

    updateSpecificGateway(id: string) {
        return this.http.put<Gateway>(`${environment.apiUrl}gateways/${id}`, {});
    }    


}