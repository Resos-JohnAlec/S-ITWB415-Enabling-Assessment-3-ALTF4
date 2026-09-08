import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LauronComponent } from './lauron-component';

describe('LauronComponent', () => {
  let component: LauronComponent;
  let fixture: ComponentFixture<LauronComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LauronComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(LauronComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
