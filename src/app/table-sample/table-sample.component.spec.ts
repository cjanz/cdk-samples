import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableSampleComponent } from './table-sample.component';
import { CdkTableModule } from '@angular/cdk/table';
import { UserService } from './user-service';
import { of } from 'rxjs';

describe('TableSampleComponent', () => {
  let component: TableSampleComponent;
  let fixture: ComponentFixture<TableSampleComponent>;
  let userServiceSpy: jasmine.SpyObj<UserService>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CdkTableModule],
      declarations: [TableSampleComponent],
      providers: [
        { provide: UserService, useValue: jasmine.createSpyObj('UserService', ['loadUsers']) }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    userServiceSpy = TestBed.get(UserService);
    userServiceSpy.loadUsers.and.returnValue(of([]));

    fixture = TestBed.createComponent(TableSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
