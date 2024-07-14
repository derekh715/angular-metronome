import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ReactiveFormsModule } from "@angular/forms";
import { By } from "@angular/platform-browser";
import { MockStore, provideMockStore } from "@ngrx/store/testing";
import { changeTempo } from "src/store/actions";
import { TempoSliderComponent } from "./tempo-slider.component";

describe("TempoSliderComponent", () => {
    let component: TempoSliderComponent;
    let fixture: ComponentFixture<TempoSliderComponent>;
    let store: MockStore;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [TempoSliderComponent],
            imports: [ReactiveFormsModule],
            providers: [
                provideMockStore({ initialState: { tempo: { tempo: 120 } } }),
            ],
        }).compileComponents();

        fixture = TestBed.createComponent(TempoSliderComponent);
        store = TestBed.inject(MockStore);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should render the same value as store", () => {
        expect(component).toBeTruthy();
    });

    it("should call changeTempo when input changed", () => {
        const newTempo = 140;
        const input = fixture.debugElement.query(
            By.css("[data-testid='tempo-slider']")
        );
        const mockedDispatch = spyOn(store, "dispatch");
        input.nativeElement.value = newTempo;
        input.nativeElement.dispatchEvent(new Event("change"));

        expect(mockedDispatch).toHaveBeenCalledWith(
            changeTempo({ tempo: newTempo })
        );
    });
});
