import { Component, OnInit } from "@angular/core";
import { first } from 'rxjs/operators';


import { Bot } from '../../../models/bot.model';
import { BotService } from '../../../services/bot.service';

@Component({
  selector: "app-database-bot",
  templateUrl: "bot.component.html"
})
export class BotComponent implements OnInit {
  //loading = false;
  bots: Bot[];

  constructor(private botService: BotService) {}

  ngOnInit() {
    this.botService.getAllBots().subscribe(
      (data) => {
        console.log(data);
        this.bots = data
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
