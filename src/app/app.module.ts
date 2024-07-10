import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { DecimalPipe } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { NgIconsModule, provideNgIconsConfig } from "@ng-icons/core";
import {
    featherBook,
    featherGithub,
    featherMusic,
    featherSettings,
} from "@ng-icons/feather-icons";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { settingsReducer } from "src/store/settings.reducer";
import { tempoReducer } from "src/store/tempo.reducer";
import { metaReducers } from "../store";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BeatComponent } from "./beat/beat.component";
import { BeatsComponent } from "./beats/beats.component";
import { BpmDisplayComponent } from "./bpm-display/bpm-display.component";
import { ButtonComponent } from "./button/button.component";
import { MetronomePageComponent } from "./metronome-page/metronome-page.component";
import { NavComponent } from "./nav/nav.component";
import { PlayButtonComponent } from "./play-button/play-button.component";
import { SettingsPageComponent } from "./settings-page/settings-page.component";
import { TapButtonComponent } from "./tap-button/tap-button.component";
import { TechPageComponent } from "./tech-page/tech-page.component";
import { TempoSliderComponent } from "./tempo-slider/tempo-slider.component";

@NgModule({
    declarations: [
        AppComponent,
        BpmDisplayComponent,
        TapButtonComponent,
        ButtonComponent,
        PlayButtonComponent,
        BeatComponent,
        BeatsComponent,
        MetronomePageComponent,
        SettingsPageComponent,
        TechPageComponent,
        NavComponent,
        TempoSliderComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgIconsModule.withIcons({
            featherSettings,
            featherMusic,
            featherGithub,
            featherBook,
        }),
        StoreModule.forRoot(
            {
                settings: settingsReducer,
                tempo: tempoReducer,
            },
            { metaReducers }
        ),
        StoreDevtoolsModule.instrument({}),
        DecimalPipe,
        ReactiveFormsModule,
    ],
    providers: [provideNgIconsConfig({ size: "3rem" })],
    bootstrap: [AppComponent],
})
export class AppModule {}
