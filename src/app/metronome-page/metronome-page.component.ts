import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { selectTempo } from "src/store";

@Component({
    selector: "app-metronome-page",
    templateUrl: "./metronome-page.component.html",
    styleUrl: "./metronome-page.component.scss",
})
export class MetronomePageComponent implements OnInit {
    tempo!: number;
    constructor(private store: Store) {}

    ngOnInit() {
        this.store.select(selectTempo).subscribe(({ tempo }) => {
            this.tempo = tempo;
        });
    }
}
