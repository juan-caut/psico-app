import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginsigninPageComponent } from './loginsignin-page.component';

describe('LoginsigninPageComponent', () => {
  let component: LoginsigninPageComponent;
  let fixture: ComponentFixture<LoginsigninPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginsigninPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginsigninPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
