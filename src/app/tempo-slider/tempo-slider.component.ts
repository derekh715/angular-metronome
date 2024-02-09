import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Store } from "@ngrx/store";
import { selectTempo } from "src/store";
import { changeTempo } from "src/store/actions";
import { AppState } from "src/store/types";

@Component({
    selector: "app-tempo-slider",
    templateUrl: "./tempo-slider.component.html",
    styleUrl: "./tempo-slider.component.scss",
})
export class TempoSliderComponent implements OnInit {
    sliderTempo = new FormControl(120);

    constructor(private store: Store<AppState>) {}

    ngOnInit() {
        this.store.select(selectTempo).subscribe(({ tempo }) => {
            if (tempo === this.sliderTempo.value) {
                return;
            }
            this.sliderTempo.setValue(tempo);
        });

        this.sliderTempo.valueChanges.subscribe((tempo) => {
            if (tempo) {
                this.store.dispatch(changeTempo({ tempo }));
            }
        });
    }
}
