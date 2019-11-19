import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCreateUserComponent } from './dialog-create-user.component';
import {MatTableModule} from '@angular/material/table';
import {ReactiveFormsModule} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatPaginatorModule} from '@angular/material/paginator';
import {StoreModule} from '@ngrx/store';
import {userReducer} from '@store/user/user.reducer';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {Actions} from '@ngrx/effects';

describe('DialogCreateUserComponent', () => {
  let component: DialogCreateUserComponent;
  let fixture: ComponentFixture<DialogCreateUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatTableModule,
        ReactiveFormsModule,
        MatDialogModule,
        MatFormFieldModule,
        MatButtonModule,
        MatInputModule,
        MatIconModule,
        MatPaginatorModule,
        StoreModule.forRoot({}),
        StoreModule.forFeature('user', userReducer),
        HttpClientModule,
        BrowserAnimationsModule,
      ],

      providers: [
        Actions,
        {provide: MatDialogRef, useValue: {}},
        {provide: MAT_DIALOG_DATA, useValue: []}
      ],
      declarations: [ DialogCreateUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogCreateUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
