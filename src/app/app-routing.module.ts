import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MetronomePageComponent } from "./metronome-page/metronome-page.component";
import { SettingsPageComponent } from "./settings-page/settings-page.component";
import { TechPageComponent } from "./tech-page/tech-page.component";

const routes: Routes = [
    {
        title: "Angular Metronome",
        component: MetronomePageComponent,
        path: "",
        pathMatch: "full",
    },
    {
        title: "Angular Metronome | Settings",
        component: SettingsPageComponent,
        path: "settings",
    },
    {
        title: "Angular Metronome | Technologies",
        component: TechPageComponent,
        path: "tech",
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
