import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeSampleComponent } from './tree-sample.component';
import { CdkTreeModule } from '@angular/cdk/tree';

describe('TreeSampleComponent', () => {
  let component: TreeSampleComponent;
  let fixture: ComponentFixture<TreeSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CdkTreeModule],
      declarations: [ TreeSampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
