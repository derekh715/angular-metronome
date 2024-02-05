import { Component, Input } from "@angular/core";

@Component({
    selector: "app-beats",
    templateUrl: "./beats.component.html",
    styleUrls: ["./beats.component.scss"],
})
export class BeatsComponent {
    @Input() beats = 4;
    isPlaying = false;

    counter() {
        return new Array(this.beats).map((_, index) => index);
    }
}
