import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: "app-button",
    templateUrl: "./button.component.html",
    styleUrls: ["./button.component.scss"],
})
export class ButtonComponent {
    @Output() clickEvent = new EventEmitter<MouseEvent>();

    click(event: MouseEvent) {
        this.clickEvent.emit(event);
    }
}
