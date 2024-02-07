import { Component, Input } from "@angular/core";

@Component({
    selector: "app-beat",
    templateUrl: "./beat.component.html",
    styleUrls: ["./beat.component.scss"],
})
export class BeatComponent {
    @Input() isCurrent = false;
}
