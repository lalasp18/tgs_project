import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NossasMarcasComponent } from './nossas-marcas.component';

describe('NossasMarcasComponent', () => {
  let component: NossasMarcasComponent;
  let fixture: ComponentFixture<NossasMarcasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NossasMarcasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NossasMarcasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
