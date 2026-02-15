import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SweetValentineComponent } from './sweet-valentine.component';

describe('SweetValentineComponent', () => {
  let component: SweetValentineComponent;
  let fixture: ComponentFixture<SweetValentineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SweetValentineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SweetValentineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
