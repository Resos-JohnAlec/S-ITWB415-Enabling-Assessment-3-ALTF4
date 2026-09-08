import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RevillasComponent } from './revillas-component';

describe('RevillasComponent', () => {
  let component: RevillasComponent;
  let fixture: ComponentFixture<RevillasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RevillasComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(RevillasComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
