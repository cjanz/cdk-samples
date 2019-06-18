import { Component, OnInit } from '@angular/core';
import { UserService, User } from './user-service';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-table-sample',
  templateUrl: './table-sample.component.html',
  styleUrls: ['./table-sample.component.scss']
})
export class TableSampleComponent implements OnInit {

  public users$: Observable<User[]>;

  public visibleColumns: (keyof User)[] = ['id', 'username', 'name', 'email', 'phone', 'website'];

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.users$ = this.userService.loadUsers()
      .pipe(shareReplay(1));
  }

  public reverseColumns() {
    this.visibleColumns = this.visibleColumns.reverse();
  }

}
