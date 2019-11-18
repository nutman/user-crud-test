import {Component, EventEmitter, Inject, OnDestroy, OnInit, Output} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef, MatSlideToggleChange} from '@angular/material';
import {FormsModule, FormBuilder, Validators, FormControl, FormArray} from '@angular/forms';
import {Actions} from '@ngrx/effects';
import {Subject} from 'rxjs';
import {ofAction} from 'ngrx-actions/dist';
import {takeUntil, tap} from 'rxjs/operators';
import {UserStoreFacade} from '@store/user/user-store.facade';
import {DeleteUser, DeleteUserFail, DeleteUserSuccess} from '@store/user/user.actions';

@Component({
  selector: 'app-dialog-remove-user',
  templateUrl: './dialog-remove-user.component.html',
  styleUrls: ['./dialog-remove-user.component.scss']
})
export class DialogRemoveUserComponent implements OnInit, OnDestroy {
  public checkoutForm;
  public serverSideError = '';
  private destroyed$ = new Subject<boolean>();
  public createOneMoreUserChecked = false;

  constructor(public dialogRef: MatDialogRef<DialogRemoveUserComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private formBuilder: FormBuilder,
              private userStoreFacade: UserStoreFacade,
              private updates$: Actions) {

    updates$.pipe(
      ofAction(DeleteUserSuccess),
      takeUntil(this.destroyed$),
      tap(() => {
        this.dialogRef.close();
      })
    ).subscribe();

    updates$.pipe(
      ofAction(DeleteUserFail),
      takeUntil(this.destroyed$),
      tap((err) => {
        this.serverSideError = err.payload;
      })
    ).subscribe();
  }

  ngOnInit() {
    this.checkoutForm = this.formBuilder.group({});
    this.checkoutForm.valueChanges.subscribe(() => {
      this.serverSideError = '';
    });
  }

  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

  closeDialog() {
    this.dialogRef.close();
  }

  onSubmit($event) {
    this.userStoreFacade.deleteUser(this.data._id);
  }
}
