import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerdesayunoComponent } from './verdesayuno.component';

describe('VerdesayunoComponent', () => {
  let component: VerdesayunoComponent;
  let fixture: ComponentFixture<VerdesayunoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerdesayunoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerdesayunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
