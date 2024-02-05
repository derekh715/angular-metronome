import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TapButtonComponent } from './tap-button.component';

describe('TapButtonComponent', () => {
  let component: TapButtonComponent;
  let fixture: ComponentFixture<TapButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TapButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TapButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
