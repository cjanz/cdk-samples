import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionSampleComponent } from './accordion-sample.component';
import { CardComponent } from './card/card.component';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('AccordionSampleComponent', () => {
  let component: AccordionSampleComponent;
  let fixture: ComponentFixture<AccordionSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AccordionSampleComponent, CardComponent],
      imports: [NoopAnimationsModule, CdkAccordionModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
