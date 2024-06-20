import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsyonlinePageComponent } from './psyonline-page.component';

describe('PsyonlinePageComponent', () => {
  let component: PsyonlinePageComponent;
  let fixture: ComponentFixture<PsyonlinePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PsyonlinePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PsyonlinePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
