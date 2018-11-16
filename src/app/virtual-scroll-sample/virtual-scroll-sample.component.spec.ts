import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualScrollSampleComponent } from './virtual-scroll-sample.component';
import { ScrollingModule } from '@angular/cdk/scrolling';

describe('VirtualScrollSampleComponent', () => {
  let component: VirtualScrollSampleComponent;
  let fixture: ComponentFixture<VirtualScrollSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ScrollingModule],
      declarations: [VirtualScrollSampleComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VirtualScrollSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
