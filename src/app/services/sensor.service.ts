import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Sensor } from '../models/sensor.model';

@Injectable({ providedIn: 'root' })
export class SensorService {
    constructor(private http: HttpClient) { }

    getAllSensors() {
        return this.http.get<Sensor[]>(`${environment.apiUrl}sensors/`);
    }

    getSpecificSensor(id: string) {
        return this.http.get<Sensor>(`${environment.apiUrl}sensors/${id}`);
    }

    createNewSensor() {
        return this.http.post<Sensor>(`${environment.apiUrl}sensors/`, {});
    }

    updateSpecificSensor(id: string) {
        return this.http.put<Sensor>(`${environment.apiUrl}sensors/${id}`, {});
    }    


}