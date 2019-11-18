import {Component, OnInit, ViewChild} from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {UserStoreFacade} from '@store/user/user-store.facade';
import {MatIconRegistry} from '@angular/material/icon';
import {DialogCreateUserComponent} from './dialog-create-user/dialog-create-user.component';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {Actions} from '@ngrx/effects';
import {DialogRemoveUserComponent} from './dialog-remove-user/dialog-remove-user.component';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  public displayedColumns: string[] = ['id', 'name', 'surname', 'email', 'x'];
  public dataSource: MatTableDataSource<User>;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(
    public dialog: MatDialog,
    private iconRegistry: MatIconRegistry,
    private updates$: Actions,
    private userStoreFacade: UserStoreFacade
  ) {
    iconRegistry.registerFontClassAlias('person_add', 'person_add');

  }

  ngOnInit() {
    this.userStoreFacade.users$.subscribe((users) => {
      this.dataSource = new MatTableDataSource<User>(users);
      this.dataSource.paginator = this.paginator;
    });
    this.userStoreFacade.getUser();

  }

  openCreateUserDialog(): void {
    this.dialog.open(DialogCreateUserComponent, {
      width: '500px',
      data: {}
    });
  }

  openRemoveUserDialog(data): void {
    this.dialog.open(DialogRemoveUserComponent, {
      width: '600px',
      data
    });
  }

}
