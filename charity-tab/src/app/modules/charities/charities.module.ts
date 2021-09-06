import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { CharityComponent } from './charity/charity.component';
import { CharityListComponent } from './charity-list/charity-list.component';
import { StoreModule } from '@ngrx/store';
import * as fromCharity from './state/charity.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CharityEffects } from './state/charity.effects';

@NgModule({
  declarations: [CharityComponent, CharityListComponent],
  imports: [CommonModule, FontAwesomeModule, FormsModule, StoreModule.forFeature(fromCharity.charitiesFeatureKey, fromCharity.reducer), EffectsModule.forFeature([CharityEffects])],
  exports: [CharityComponent, CharityListComponent],
})
export class CharitiesModule {}
