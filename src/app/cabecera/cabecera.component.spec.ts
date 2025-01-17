import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabeceraComponent } from './cabecera.component';
import { RenderejemploComponent } from '../renderejemplo/renderejemplo.component';

describe('CabeceraComponent', () => {
  let component: CabeceraComponent;
  let fixture: ComponentFixture<CabeceraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CabeceraComponent,RenderejemploComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CabeceraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
