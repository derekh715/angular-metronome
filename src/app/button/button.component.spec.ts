import { ComponentFixture, TestBed } from "@angular/core/testing";

import { Component } from "@angular/core";
import { By } from "@angular/platform-browser";
import { ButtonComponent } from "./button.component";

describe("ButtonComponent", () => {
    const buttonText = "Hello World!";
    @Component({
        template: `<app-button>${buttonText}</app-button>`,
    })
    class TestButtonComponent {}

    let component: TestButtonComponent;
    let fixture: ComponentFixture<TestButtonComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ButtonComponent, TestButtonComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(TestButtonComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("shows button text", () => {
        const el = fixture.nativeElement;
        expect(el.textContent).toBe(buttonText);
    });

    it("invokes event handler when clicked", () => {
        let clicked = false;
        const el = fixture.debugElement.query(By.css(".button"));
        const button = el.componentInstance as ButtonComponent;
        // register first before clicking
        button.clickEvent.subscribe(() => {
            clicked = true;
        });
        el.triggerEventHandler("click", null);
        expect(clicked).toBe(true);
    });
});
