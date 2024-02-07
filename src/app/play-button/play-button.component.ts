import { Component, OnInit } from "@angular/core";
import { MetronomeService } from "../metronome.service";

@Component({
    selector: "app-play-button",
    templateUrl: "./play-button.component.html",
    styleUrls: ["./play-button.component.scss"],
})
export class PlayButtonComponent implements OnInit {
    isPlaying = false;
    constructor(private metronomeService: MetronomeService) {}

    playOrStop() {
        if (this.isPlaying) {
            this.metronomeService.stop();
        } else {
            this.metronomeService.play();
        }
    }

    ngOnInit() {
        this.metronomeService.isPlaying.subscribe((isPlaying) => {
            this.isPlaying = isPlaying;
        });
    }
}
