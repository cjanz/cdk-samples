import { Component, OnInit, Input } from '@angular/core';
import { CdkAccordionItem } from '@angular/cdk/accordion';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  animations: [
    trigger('bodyExpansion', [
      state('false', style({ height: '0px', visibility: 'hidden' })),
      state('true', style({ height: '*', visibility: 'visible' })),
      transition('true <=> false',
        animate('300ms ease-in-out')),
    ]),
    trigger('indicatorRotate', [
      state('false', style({ transform: 'rotate(0deg)' })),
      state('true', style({ transform: 'rotate(180deg)' })),
      transition('true <=> false',
        animate('300ms ease-in-out')),
    ])
  ]
})
export class CardComponent extends CdkAccordionItem implements OnInit {

  @Input() title: string;

  ngOnInit() {
  }

}
