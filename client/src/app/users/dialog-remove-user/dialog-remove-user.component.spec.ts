import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogRemoveUserComponent } from './dialog-remove-user.component';

describe('DialogRemoveUserComponent', () => {
  let component: DialogRemoveUserComponent;
  let fixture: ComponentFixture<DialogRemoveUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogRemoveUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogRemoveUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
