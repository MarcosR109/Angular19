import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderejemploComponent } from './renderejemplo.component';

describe('RenderejemploComponent', () => {
  let component: RenderejemploComponent;
  let fixture: ComponentFixture<RenderejemploComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RenderejemploComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RenderejemploComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
