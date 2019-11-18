import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DialogCreateUserComponent} from './dialog-create-user/dialog-create-user.component';
import {UsersComponent} from './users.component';
import {MatTableModule} from '@angular/material/table';
import {ReactiveFormsModule} from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {DialogRemoveUserComponent} from './dialog-remove-user/dialog-remove-user.component';
import {MatPaginatorModule} from '@angular/material/paginator';

@NgModule({
  declarations: [
    UsersComponent,
    DialogCreateUserComponent,
    DialogRemoveUserComponent

  ],
  entryComponents: [
    DialogCreateUserComponent,
    DialogRemoveUserComponent
  ],
  imports: [
    MatTableModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatPaginatorModule
  ],
  exports: [
    UsersComponent
  ],
  providers: []
})
export class UsersModule { }
