import {Component, EventEmitter, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {MatDialogRef, MatSlideToggleChange} from '@angular/material';
import {FormBuilder, Validators, FormArray, FormGroup, FormGroupDirective} from '@angular/forms';
import {UserStoreFacade} from '@store/user/user-store.facade';
import {Actions} from '@ngrx/effects';
import {Subject} from 'rxjs';
import {takeUntil, tap, debounceTime, map} from 'rxjs/operators';
import {ofAction} from 'ngrx-actions/dist';
import {CreateUserSuccess} from '@store/user/user.actions';

@Component({
  selector: 'app-dialog-create-user',
  templateUrl: './dialog-create-user.component.html',
  styleUrls: ['./dialog-create-user.component.scss']
})
export class DialogCreateUserComponent implements OnInit, OnDestroy {
  @Output() public submitData = new EventEmitter<any>();
  @ViewChild('form', {static: false}) form: FormGroupDirective;
  public checkoutForm: FormGroup;
  public error$ = this.userStoreFacade.error$;
  private destroyed$ = new Subject<boolean>();
  public createOneMoreUserChecked = false;

  constructor(public dialogRef: MatDialogRef<DialogCreateUserComponent>,
              private formBuilder: FormBuilder,
              private userStoreFacade: UserStoreFacade,
              private updates$: Actions) {
    updates$.pipe(
      ofAction(CreateUserSuccess),
      takeUntil(this.destroyed$),
      tap(() => {
        this.dialogRef.close();
      })
    ).subscribe();

  }

  ngOnInit() {
    this.checkoutForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      name: ['', Validators.compose([Validators.required, Validators.max(200)])],
      surname: ['', Validators.compose([Validators.required, Validators.max(200)])],
    });

  }

  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

  get email() {
    return this.checkoutForm.get('email') as FormArray;
  }

  get organizationId() {
    return this.checkoutForm.get('organizationId') as FormArray;
  }

  closeDialog() {
    this.dialogRef.close();
  }

  onSubmit(data: User) {
    this.userStoreFacade.createUser(data);
    this.submitData.emit();
  }

  onToggleChange(ob: MatSlideToggleChange) {
    this.createOneMoreUserChecked = ob.checked;
  }

  displayOrganization(organization?: any): string | undefined {
    return organization ? organization.name : undefined;
  }
}
