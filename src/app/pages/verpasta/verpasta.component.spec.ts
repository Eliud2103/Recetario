import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerpastaComponent } from './verpasta.component';

describe('VerpastaComponent', () => {
  let component: VerpastaComponent;
  let fixture: ComponentFixture<VerpastaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerpastaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerpastaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
