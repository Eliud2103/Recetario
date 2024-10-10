import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VercoctelesComponent } from './vercocteles.component';

describe('VercoctelesComponent', () => {
  let component: VercoctelesComponent;
  let fixture: ComponentFixture<VercoctelesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VercoctelesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VercoctelesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
