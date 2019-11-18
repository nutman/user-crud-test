import { NgModule } from '@angular/core';
import { ActionReducer, MetaReducer, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '@environments/environment';
import { UserStoreModule } from '@store/user/user-store.module';

const STORES = [
  UserStoreModule,
];

@NgModule({
  imports: [
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    ...STORES
  ],
  exports: [
    StoreModule,
    EffectsModule,
    StoreDevtoolsModule,
  ]
})
export class RootStoreModule {
}
