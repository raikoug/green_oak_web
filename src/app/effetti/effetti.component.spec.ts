import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EffettiComponent } from './effetti.component';

describe('EffettiComponent', () => {
  let component: EffettiComponent;
  let fixture: ComponentFixture<EffettiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EffettiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EffettiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
