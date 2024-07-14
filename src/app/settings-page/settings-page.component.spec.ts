import { ComponentFixture, TestBed } from "@angular/core/testing";
import { MockStore, provideMockStore } from "@ngrx/store/testing";

import { ReactiveFormsModule } from "@angular/forms";
import { By } from "@angular/platform-browser";
import { changeSettings } from "src/store/actions";
import { SettingsPageComponent } from "./settings-page.component";

describe("SettingsPageComponent", () => {
    let component: SettingsPageComponent;
    let fixture: ComponentFixture<SettingsPageComponent>;
    let store: MockStore;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [SettingsPageComponent],
            imports: [ReactiveFormsModule],
            providers: [provideMockStore()],
        }).compileComponents();

        fixture = TestBed.createComponent(SettingsPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        store = TestBed.inject(MockStore);
    });

    it("changing beats updates the store", () => {
        const mockDispatch = spyOn(store, "dispatch");
        const newBeat = 5;
        const select = fixture.debugElement.query(
            By.css("[data-testid='select-beats']")
        ).nativeElement as HTMLSelectElement;

        select.value = `${newBeat}`;
        // don't use input
        select.dispatchEvent(new Event("change"));

        expect(mockDispatch).toHaveBeenCalledWith(
            changeSettings({
                beats: newBeat,
            })
        );
    });
});
