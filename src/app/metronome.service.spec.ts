import {
    TestBed,
    discardPeriodicTasks,
    fakeAsync,
    tick,
} from "@angular/core/testing";
import { MockStore, provideMockStore } from "@ngrx/store/testing";
import { skip, take, toArray } from "rxjs";
import { DrumMachine } from "smplr";
import { MetronomeService } from "./metronome.service";

describe("MetronomeService", () => {
    let service: MetronomeService;
    let store: MockStore;
    const tempo = 120;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                provideMockStore({
                    initialState: {
                        settings: { beats: 2 },
                        tempo: { tempo },
                    },
                }),
            ],
        });
        service = TestBed.inject(MetronomeService);
        store = TestBed.inject(MockStore);

        spyOn(DrumMachine.prototype, "start").and.returnValue(() => {});
        spyOn(DrumMachine.prototype, "stop");
    });

    it("increases two beats after 1s", fakeAsync(() => {
        // first beat is initialization, which is -1
        service.currentBeat
            .pipe(skip(1), take(2), toArray())
            .subscribe((beats) => {
                expect(beats).toEqual([0, 1]);
            });
        service.play();
        tick((60 / tempo) * 1000 * 2);
        discardPeriodicTasks();
    }));

    it("updates isPlaying and timer correcrtly", fakeAsync(() => {
        service.isPlaying
            .pipe(skip(1), take(2), toArray())
            .subscribe((playings) => {
                expect(playings).toEqual([true, false]);
            });
        service.timer.pipe(skip(1), take(2), toArray()).subscribe((timers) => {
            expect(timers[0]).not.toBeNull();
            expect(timers[1]).toBeNull();
        });
        service.play();
        // doesn't matter
        tick(2000);
        service.stop();
    }));
});
