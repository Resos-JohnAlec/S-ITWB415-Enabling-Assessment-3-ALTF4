import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagnoComponent } from './magno-component';

describe('MagnoComponent', () => {
  let component: MagnoComponent;
  let fixture: ComponentFixture<MagnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MagnoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MagnoComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
