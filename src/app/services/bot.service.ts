import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Bot } from '../models/bot.model';

@Injectable({ providedIn: 'root' })
export class BotService {
    constructor(private http: HttpClient) { }

    getAllBots() {
        return this.http.get<Bot[]>(`${environment.apiUrl}bots/`);
    }

    getSpecificBot(id: string) {
        return this.http.get<Bot>(`${environment.apiUrl}bots/${id}`);
    }

    createNewBot() {
        return this.http.post<Bot>(`${environment.apiUrl}bots/`, {});
    }

    updateSpecificBot(id: string) {
        return this.http.put<Bot>(`${environment.apiUrl}bots/${id}`, {});
    }    


}