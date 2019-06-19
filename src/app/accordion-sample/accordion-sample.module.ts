import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccordionSampleRoutingModule } from './accordion-sample-routing.module';
import { AccordionSampleComponent } from './accordion-sample.component';
import { CardComponent } from './card/card.component';
import { CdkAccordionModule } from '@angular/cdk/accordion';

@NgModule({
  declarations: [AccordionSampleComponent, CardComponent],
  entryComponents: [AccordionSampleComponent],
  imports: [
    CommonModule,
    AccordionSampleRoutingModule,
    CdkAccordionModule
  ]
})
export class AccordionSampleModule { }
