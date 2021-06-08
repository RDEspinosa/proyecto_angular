import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecetaPreviewComponent } from './receta-preview.component';

describe('RecetaPreviewComponent', () => {
  let component: RecetaPreviewComponent;
  let fixture: ComponentFixture<RecetaPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecetaPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecetaPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
