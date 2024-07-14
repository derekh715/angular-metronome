import { ComponentFixture, TestBed } from "@angular/core/testing";

import { By } from "@angular/platform-browser";
import { BeatComponent } from "./beat.component";

describe("BeatComponent", () => {
    let component: BeatComponent;
    let fixture: ComponentFixture<BeatComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [BeatComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(BeatComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should apply active class correctly", () => {
        // is current
        component.isCurrent = true;
        fixture.detectChanges();
        let debugEl = fixture.debugElement.query(By.css(".active"));
        expect(debugEl).not.toBeNull();

        // not current
        component.isCurrent = false;
        fixture.detectChanges();
        debugEl = fixture.debugElement.query(By.css(".active"));
        expect(debugEl).toBeNull();
    });
});
