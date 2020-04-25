import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Account } from '../models/account.model';

@Injectable({ providedIn: 'root' })
export class AccountService {
    constructor(private http: HttpClient) { }

    getAllAccounts() {
        return this.http.get<Account[]>(`${environment.apiUrl}accounts/`);
    }

    getSpecificAccount(id: string) {
        return this.http.get<Account>(`${environment.apiUrl}accounts/${id}`);
    }

    createNewAccount() {
        return this.http.post<Account>(`${environment.apiUrl}accounts/`, {});
    }

    updateSpecificAccount(id: string) {
        return this.http.put<Account>(`${environment.apiUrl}accounts/${id}`, {});
    }    

}