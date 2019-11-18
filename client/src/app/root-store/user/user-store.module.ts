import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { userReducer } from '@store/user/user.reducer';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from '@store/user/user.effects';

@NgModule({
  imports: [
    StoreModule.forFeature('user', userReducer),
    EffectsModule.forFeature([UserEffects])
  ],
})
export class UserStoreModule {
}
