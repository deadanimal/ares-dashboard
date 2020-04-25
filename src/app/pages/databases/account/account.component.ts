import { Component, OnInit } from "@angular/core";
import { first } from 'rxjs/operators';


import { Account } from '../../../models/account.model';
import { AccountService } from '../../../services/account.service';

@Component({
  selector: "app-database-account",
  templateUrl: "account.component.html"
})
export class AccountComponent implements OnInit {
  //loading = false;
  accounts: Account[];

  constructor(private accountService: AccountService) {}

  ngOnInit() {
    this.accountService.getAllAccounts().subscribe(
      (data) => {
        console.log(data);
        this.accounts = data
      },
      (error) => {
        console.log(error);
      },
      () => {
        console.log('DONE');
      }
    )
  }
}
