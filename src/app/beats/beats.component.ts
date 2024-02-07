import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { selectSettings } from "src/store";
import { AppState } from "src/store/types";
import { MetronomeService } from "../metronome.service";

@Component({
    selector: "app-beats",
    templateUrl: "./beats.component.html",
    styleUrls: ["./beats.component.scss"],
})
export class BeatsComponent implements OnInit {
    beats!: number;
    currentBeat!: number;
    isPlaying!: boolean;

    constructor(
        private store: Store<AppState>,
        private metronome: MetronomeService
    ) {}

    counter() {
        return [...Array(this.beats).keys()];
    }

    ngOnInit() {
        this.store.select(selectSettings).subscribe(({ beats }) => {
            this.beats = beats;
        });
        this.metronome.currentBeat.subscribe((currentBeat) => {
            this.currentBeat = currentBeat;
        });
        this.metronome.isPlaying.subscribe((isPlaying) => {
            this.isPlaying = isPlaying;
        });
    }
}
