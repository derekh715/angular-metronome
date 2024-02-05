import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BeatComponent } from "./beat/beat.component";
import { BeatsComponent } from "./beats/beats.component";
import { BpmDisplayComponent } from "./bpm-display/bpm-display.component";
import { ButtonComponent } from "./button/button.component";
import { PlayButtonComponent } from "./play-button/play-button.component";
import { TapButtonComponent } from "./tap-button/tap-button.component";

@NgModule({
    declarations: [
        AppComponent,
        BpmDisplayComponent,
        TapButtonComponent,
        ButtonComponent,
        PlayButtonComponent,
        BeatComponent,
        BeatsComponent,
    ],
    imports: [BrowserModule, AppRoutingModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
