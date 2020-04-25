import { Routes } from "@angular/router";

import { AccountComponent } from "./account/account.component";
import { BotComponent } from "./bot/bot.component";

export const DatabasesRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "account",
        component: AccountComponent
      },      
      {
        path: "bot",
        component: BotComponent
      }
    ]
  },
];
