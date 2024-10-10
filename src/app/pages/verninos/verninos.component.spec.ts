import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerninosComponent } from './verninos.component';

describe('VerninosComponent', () => {
  let component: VerninosComponent;
  let fixture: ComponentFixture<VerninosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerninosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerninosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
