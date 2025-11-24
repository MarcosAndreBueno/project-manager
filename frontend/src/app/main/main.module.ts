import { NgModule } from "@angular/core";
import { MainRoutingModule } from "./main.routes";
import { CommonModule } from "@angular/common";
import { MainComponent } from "./main.component";

@NgModule({
    declarations: [
        MainComponent
    ],
    imports: [
        CommonModule,
        MainRoutingModule
    ],
}) export class MainModule { }