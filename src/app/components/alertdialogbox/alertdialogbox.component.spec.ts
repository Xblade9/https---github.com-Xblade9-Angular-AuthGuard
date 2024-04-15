import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertdialogboxComponent } from './alertdialogbox.component';

describe('AlertdialogboxComponent', () => {
  let component: AlertdialogboxComponent;
  let fixture: ComponentFixture<AlertdialogboxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlertdialogboxComponent]
    });
    fixture = TestBed.createComponent(AlertdialogboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
