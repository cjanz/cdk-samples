import { Component, OnInit } from '@angular/core';

interface IRow {
  id: number;
  progress: number;
}

@Component({
  selector: 'app-table-sample',
  templateUrl: './table-sample.component.html',
  styleUrls: ['./table-sample.component.scss']
})
export class TableSampleComponent implements OnInit {

  public dataSource: IRow[] = [];

  public visibleColumns = ['userId', 'progress'];

  constructor() {
    for (let i = 0; i < 100; i++) {
      this.dataSource.push({ id: i, progress: Math.random() * 100 });
    }
  }

  ngOnInit() {
  }

  public reverseColumns() {
    this.visibleColumns = this.visibleColumns.reverse();
  }

}
