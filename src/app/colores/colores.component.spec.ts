import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColoresComponent } from './colores.component';
import { CommonModule } from '@angular/common';

describe('ColoresComponent', () => {
  let component: ColoresComponent;
  let fixture: ComponentFixture<ColoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColoresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
