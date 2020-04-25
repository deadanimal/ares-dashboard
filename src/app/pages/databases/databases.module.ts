import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ComponentsModule } from "../../components/components.module";

import { BsDropdownModule } from "ngx-bootstrap";
import { ProgressbarModule } from "ngx-bootstrap/progressbar";
import { TooltipModule } from "ngx-bootstrap/tooltip";

import { AccountComponent } from "./account/account.component";
import { BotComponent } from "./bot/bot.component";

import { RouterModule } from "@angular/router";
import { DatabasesRoutes } from "./databases.routing";

let componentList = [
  AccountComponent,
  BotComponent,
]

@NgModule({
  declarations: componentList,
  imports: [
    CommonModule,
    ComponentsModule,
    BsDropdownModule.forRoot(),
    ProgressbarModule.forRoot(),
    TooltipModule.forRoot(),
    RouterModule.forChild(DatabasesRoutes)
  ],
  exports: componentList
})
export class DatabasesModule {}
