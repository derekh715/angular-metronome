import { ComponentFixture, TestBed } from "@angular/core/testing";

import { NO_ERRORS_SCHEMA } from "@angular/core";
import { By } from "@angular/platform-browser";
import { MockStore, provideMockStore } from "@ngrx/store/testing";
import { BpmDisplayComponent } from "../bpm-display/bpm-display.component";
import { MetronomePageComponent } from "./metronome-page.component";

describe("MetronomePageComponent", () => {
    let component: MetronomePageComponent;
    let fixture: ComponentFixture<MetronomePageComponent>;
    let store: MockStore;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [MetronomePageComponent, BpmDisplayComponent],
            providers: [
                provideMockStore({ initialState: { tempo: { tempo: 120 } } }),
            ],
            schemas: [NO_ERRORS_SCHEMA],
        }).compileComponents();

        fixture = TestBed.createComponent(MetronomePageComponent);
        component = fixture.componentInstance;
        store = TestBed.inject(MockStore);
        fixture.detectChanges();
    });

    it("passes the tempo prop to BpmDisplay correctly", () => {
        const display = fixture.debugElement.query(
            By.directive(BpmDisplayComponent)
        ).componentInstance as BpmDisplayComponent;
        expect(display.tempo).toBe(120);
    });
});
