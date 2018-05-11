import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableSampleComponent } from './table-sample.component';

describe('TableSampleComponent', () => {
  let component: TableSampleComponent;
  let fixture: ComponentFixture<TableSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableSampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
