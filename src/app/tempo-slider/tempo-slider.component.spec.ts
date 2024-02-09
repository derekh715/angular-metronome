import { ComponentFixture, TestBed } from "@angular/core/testing";

import { TempoSliderComponent } from "./tempo-slider.component";

describe("TempoSliderComponent", () => {
    let component: TempoSliderComponent;
    let fixture: ComponentFixture<TempoSliderComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [TempoSliderComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(TempoSliderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
