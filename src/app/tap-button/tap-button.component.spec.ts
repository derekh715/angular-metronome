import { ComponentFixture, TestBed } from "@angular/core/testing";

import { By } from "@angular/platform-browser";
import { MockStore, provideMockStore } from "@ngrx/store/testing";
import { detectTempo } from "src/store/actions";
import { ButtonComponent } from "../button/button.component";
import { TapButtonComponent } from "./tap-button.component";

describe("TapButtonComponent", () => {
    let component: TapButtonComponent;
    let fixture: ComponentFixture<TapButtonComponent>;
    let store: MockStore;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [TapButtonComponent, ButtonComponent],
            providers: [provideMockStore({})],
        }).compileComponents();

        fixture = TestBed.createComponent(TapButtonComponent);
        store = TestBed.inject(MockStore);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should call detectTempo action when clicked", () => {
        const mockDispatch = spyOn(store, "dispatch");
        const button = fixture.debugElement.query(
            By.directive(ButtonComponent)
        );
        button.triggerEventHandler("clickEvent", null);
        expect(mockDispatch).toHaveBeenCalledWith(detectTempo({}));
    });
});
