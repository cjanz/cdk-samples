import { AfterViewInit, Component, OnDestroy, ViewChild } from '@angular/core';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-virtual-scroll-sample',
  templateUrl: './virtual-scroll-sample.component.html',
  styleUrls: ['./virtual-scroll-sample.component.scss']
})
export class VirtualScrollSampleComponent implements AfterViewInit, OnDestroy {

  @ViewChild(CdkVirtualScrollViewport, { static: true }) scrollViewPortElement: CdkVirtualScrollViewport;

  viewPortHtml = '';

  items = Array
    .from({length: 100000})
    .map((_, i) => `Item #${i}`);

  private subscription = new Subscription();

  ngAfterViewInit(): void {
    this.subscription.add(interval(50)
      .subscribe(() => this.updateViewPortHtml()));
  }

  private updateViewPortHtml() {
    this.viewPortHtml = this.scrollViewPortElement.elementRef.nativeElement.outerHTML
      .trim()
      .replace(/<div/g, '\n\r<div');
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }


}
