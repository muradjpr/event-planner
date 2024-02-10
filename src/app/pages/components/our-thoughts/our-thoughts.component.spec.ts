import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurThoughtsComponent } from './our-thoughts.component';

describe('OurThoughtsComponent', () => {
  let component: OurThoughtsComponent;
  let fixture: ComponentFixture<OurThoughtsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurThoughtsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OurThoughtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
