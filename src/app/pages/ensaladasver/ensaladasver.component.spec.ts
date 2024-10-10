import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnsaladasverComponent } from './ensaladasver.component';

describe('EnsaladasverComponent', () => {
  let component: EnsaladasverComponent;
  let fixture: ComponentFixture<EnsaladasverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnsaladasverComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnsaladasverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
