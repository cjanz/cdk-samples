import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatformSampleComponent } from './platform-sample.component';

describe('PlatformSampleComponent', () => {
  let component: PlatformSampleComponent;
  let fixture: ComponentFixture<PlatformSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlatformSampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatformSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
