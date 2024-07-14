import { ComponentFixture, TestBed } from "@angular/core/testing";

import { By } from "@angular/platform-browser";
import { BehaviorSubject } from "rxjs";
import { ButtonComponent } from "../button/button.component";
import { MetronomeService } from "../metronome.service";
import { PlayButtonComponent } from "./play-button.component";

describe("PlayButtonComponent", () => {
    let component: PlayButtonComponent;
    let fixture: ComponentFixture<PlayButtonComponent>;

    let fakeMetronomeService: Pick<MetronomeService, keyof MetronomeService>;

    beforeEach(async () => {
        let $isPlaying = new BehaviorSubject(false);
        fakeMetronomeService = {
            currentBeat: new BehaviorSubject(0),
            timer: new BehaviorSubject<number | null>(0),
            isPlaying: $isPlaying,
            play: jasmine
                .createSpy("play")
                .and.callFake(() => $isPlaying.next(true)),
            stop: jasmine
                .createSpy("stop")
                .and.callFake(() => $isPlaying.next(false)),
        };
        await TestBed.configureTestingModule({
            declarations: [PlayButtonComponent, ButtonComponent],
            providers: [
                { provide: MetronomeService, useValue: fakeMetronomeService },
            ],
        }).compileComponents();

        fixture = TestBed.createComponent(PlayButtonComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should show play when stopped and stop when playing", () => {
        let button = fixture.debugElement.query(By.directive(ButtonComponent));
        // start
        button.triggerEventHandler("clickEvent", null);
        fixture.detectChanges();
        expect(fakeMetronomeService.play).toHaveBeenCalled();
        expect(button.nativeElement.textContent).toMatch(/stop/i);

        // stop
        button.triggerEventHandler("clickEvent", null);
        fixture.detectChanges();
        expect(fakeMetronomeService.stop).toHaveBeenCalled();
        expect(button.nativeElement.textContent).toMatch(/start/i);
    });
});
