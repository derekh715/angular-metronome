import { ComponentFixture, TestBed } from "@angular/core/testing";

import { By } from "@angular/platform-browser";
import { BpmDisplayComponent } from "./bpm-display.component";

describe("BpmDisplayComponent", () => {
    let component: BpmDisplayComponent;
    let fixture: ComponentFixture<BpmDisplayComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [BpmDisplayComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(BpmDisplayComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("show bpm according to prop", () => {
        component.tempo = 120;
        fixture.detectChanges();
        const el = fixture.debugElement.query(
            By.css("[data-testid='display-value']")
        ).nativeElement;
        expect(parseInt(el.textContent)).toBe(120);
    });

    it("rounds decimal values to the nearest integer", () => {
        component.tempo = 120.5;
        fixture.detectChanges();
        const el = fixture.debugElement.query(
            By.css("[data-testid='display-value']")
        ).nativeElement;
        expect(parseInt(el.textContent)).toBe(121);
    });
});
