import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CharityService } from './services/charity.service';
import * as $ from 'jquery';
import * as bootstrap from 'bootstrap';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { reducers, metaReducers } from './store';
import { PagesModule } from './pages/pages.module';
import { AlertModule } from 'ngx-alerts';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './modules/auth/auth.module';
import { EffectsModule } from '@ngrx/effects';
import { DonateEffects } from './store/donate/donate.effects';
import { SpinnerEffects } from './store/spinner/spinner.effects';
import { RouteEffects } from './store/route/route.effects';
import { AlertEffects } from './store/alert/alert.effects';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AppEffects } from './store/app/app.effects';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    HttpClientModule,
    PagesModule,
    RouterModule,
    AuthModule,
    FormsModule,
    NgxSpinnerModule,
    AlertModule.forRoot(environment.alertConfig),
    BrowserAnimationsModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
        strictStateSerializability: true,
        strictActionSerializability: true,
        strictActionWithinNgZone: true,
        strictActionTypeUniqueness: true,
      },
    }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([
      DonateEffects,
      SpinnerEffects,
      RouteEffects,
      AlertEffects,
      AppEffects,
    ]),
  ],
  providers: [CharityService],
  bootstrap: [AppComponent],
})
export class AppModule {}
