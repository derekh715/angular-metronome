import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { BehaviorSubject, map } from "rxjs";
import { DrumMachine, getDrumMachineNames } from "smplr";
import { AppState } from "src/store/types";

@Injectable({
    providedIn: "root",
})
export class MetronomeService {
    public timer = new BehaviorSubject<number | null>(null);
    public currentBeat = new BehaviorSubject<number>(-1);
    public isPlaying = this.timer.pipe(map((timer) => !!timer));

    private ctx: AudioContext;
    private instrument: DrumMachine;
    private beats: number = 4;
    private tempo: number = 120;

    constructor(private store: Store<AppState>) {
        this.ctx = new AudioContext();
        const instruments = getDrumMachineNames();
        this.instrument = new DrumMachine(this.ctx, {
            instrument: instruments[4],
        });
        this.store
            .select((state) => state)
            .subscribe((state) => {
                this.stop();
                this.beats = state.settings.beats;
                this.tempo = state.tempo.tempo;
                this.currentBeat.next(-1);
            });
    }

    play() {
        this.timer.next(
            window.setInterval(() => {
                let nextBeat = this.currentBeat.value + 1;
                if (nextBeat >= this.beats) {
                    nextBeat = 0;
                }
                this.currentBeat.next(nextBeat);
                this.instrument.start({
                    note: this.currentBeat.value === 0 ? "conga" : "clave",
                });
            }, (60 / this.tempo) * 1000)
        );
    }

    stop() {
        if (this.timer.value) {
            clearInterval(this.timer.value);
        }
        this.timer.next(null);
    }
}
