import { Component, OnInit } from '@angular/core';
import { NestedTreeControl } from '@angular/cdk/tree';

import { of } from 'rxjs';

interface ITreeNode {
  name: string;
  children?: ITreeNode[];
}

const sample: ITreeNode = {
  name: 'Germany',
  children: [
    {
      name: 'Baden-Württemberg',
      children: [
        {name: 'Karlsruhe'},
        {name: 'Stuttgart'},
        {name: 'Freiburg'},
      ]
    },
    {
      name: 'Bayern',
      children: [
        {name: 'München'}
      ]
    },
  ]
};

@Component({
  selector: 'app-tree-sample',
  templateUrl: './tree-sample.component.html',
  styleUrls: ['./tree-sample.component.scss']
})
export class TreeSampleComponent implements OnInit {

  public dataSource = [sample];

  public treeControl = new NestedTreeControl<ITreeNode>(node => of(node.children));

  constructor() {
  }

  ngOnInit() {
  }

  public hasChildren(_, node: ITreeNode) {
    return node.children && node.children.length > 0;
  }

}
