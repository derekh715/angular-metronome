import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { selectTempo } from "src/store";
import { AppState } from "src/store/types";

@Component({
    selector: "app-metronome-page",
    templateUrl: "./metronome-page.component.html",
    styleUrl: "./metronome-page.component.scss",
})
export class MetronomePageComponent implements OnInit {
    tempo!: number;
    constructor(private store: Store<AppState>) {}

    ngOnInit() {
        this.store.select(selectTempo).subscribe(({ tempo }) => {
            this.tempo = tempo;
        });
    }
}
