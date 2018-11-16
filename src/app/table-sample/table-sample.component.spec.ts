import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableSampleComponent } from './table-sample.component';
import { CdkTableModule } from '@angular/cdk/table';

describe('TableSampleComponent', () => {
  let component: TableSampleComponent;
  let fixture: ComponentFixture<TableSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CdkTableModule],
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
