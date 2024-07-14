import { ComponentFixture, TestBed } from "@angular/core/testing";

import { By } from "@angular/platform-browser";
import { MockStore, provideMockStore } from "@ngrx/store/testing";
import { BehaviorSubject } from "rxjs";
import { BeatComponent } from "../beat/beat.component";
import { MetronomeService } from "../metronome.service";
import { BeatsComponent } from "./beats.component";

describe("BeatsComponent", () => {
    let component: BeatsComponent;
    let fixture: ComponentFixture<BeatsComponent>;
    let store: MockStore;
    let fakeMetronomeService: Pick<MetronomeService, keyof MetronomeService>;
    let currentBeat$: BehaviorSubject<number>;
    let isPlaying$: BehaviorSubject<boolean>;

    beforeEach(async () => {
        currentBeat$ = new BehaviorSubject(0);
        isPlaying$ = new BehaviorSubject(true);
        fakeMetronomeService = {
            currentBeat: currentBeat$,
            timer: new BehaviorSubject<number | null>(0),
            isPlaying: isPlaying$,
            play: jasmine.createSpy("play"),
            stop: jasmine.createSpy("stop"),
        };
        await TestBed.configureTestingModule({
            declarations: [BeatsComponent, BeatComponent],
            providers: [
                provideMockStore({ initialState: { settings: { beats: 4 } } }),
                { provide: MetronomeService, useValue: fakeMetronomeService },
            ],
        }).compileComponents();

        fixture = TestBed.createComponent(BeatsComponent);
        component = fixture.componentInstance;
        store = TestBed.inject(MockStore);
        fixture.detectChanges();
    });

    it("shows four beats when initialized", () => {
        const beats = fixture.debugElement.queryAll(
            By.directive(BeatComponent)
        );
        expect(beats.length).toBe(4);
    });

    it("sets the first beat to be current when initialized", () => {
        const beats = fixture.debugElement.queryAll(
            By.directive(BeatComponent)
        );
        expect((beats[0].componentInstance as BeatComponent).isCurrent).toBe(
            true
        );
        for (let i = 1; i < 3; i++) {
            expect(
                (beats[i].componentInstance as BeatComponent).isCurrent
            ).toBe(false);
        }
    });

    it("incrementing currentBeat changes the current beat in beats component", () => {
        currentBeat$.next(1);
        fixture.detectChanges();
        const beats = fixture.debugElement.queryAll(
            By.directive(BeatComponent)
        );
        expect((beats[1].componentInstance as BeatComponent).isCurrent).toBe(
            true
        );
    });

    it("doesn't show any of the beats when not playing", () => {
        isPlaying$.next(false);
        fixture.detectChanges();
        const beats = fixture.debugElement.queryAll(
            By.directive(BeatComponent)
        );
        expect(beats).toHaveSize(0);
    });
});
