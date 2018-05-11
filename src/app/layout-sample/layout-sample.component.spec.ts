import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutSampleComponent } from './layout-sample.component';

describe('LayoutSampleComponent', () => {
  let component: LayoutSampleComponent;
  let fixture: ComponentFixture<LayoutSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutSampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
