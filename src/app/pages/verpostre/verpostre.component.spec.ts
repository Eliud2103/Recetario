import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerpostreComponent } from './verpostre.component';

describe('VerpostreComponent', () => {
  let component: VerpostreComponent;
  let fixture: ComponentFixture<VerpostreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerpostreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerpostreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
