import { Component } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Store } from "@ngrx/store";
import { selectSettings } from "src/store";
import { changeSettings } from "src/store/actions";
import { AppState } from "src/store/types";

@Component({
    selector: "app-settings-page",
    templateUrl: "./settings-page.component.html",
    styleUrl: "./settings-page.component.scss",
})
export class SettingsPageComponent {
    beatsControl = new FormControl("2");

    constructor(private store: Store<AppState>) {}

    ngOnInit() {
        this.store.select(selectSettings).subscribe(({ beats }) => {
            if (beats.toString() === this.beatsControl.value) {
                return;
            }
            this.beatsControl.setValue(beats.toString());
        });

        this.beatsControl.valueChanges.subscribe((beats) => {
            if (beats) {
                this.store.dispatch(changeSettings({ beats: parseInt(beats) }));
            }
        });
    }
}
