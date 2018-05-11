import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlaySampleComponent } from './overlay-sample.component';

describe('OverlaySampleComponent', () => {
  let component: OverlaySampleComponent;
  let fixture: ComponentFixture<OverlaySampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverlaySampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverlaySampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
